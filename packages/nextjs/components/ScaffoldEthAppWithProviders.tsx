"use client";

import { useEffect, useState } from "react";
// import Footer from "./footer/Footer";
import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useTheme } from "next-themes";
import { Toaster } from "react-hot-toast";
import { WagmiProvider } from "wagmi";
// import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { ProgressBar } from "~~/components/scaffold-eth/ProgressBar";
import { useInitializeNativeCurrencyPrice } from "~~/hooks/scaffold-eth";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";
/* */
import {
  ConnectProvider,
  OKXConnector,
  UnisatConnector,
  BitgetConnector
} from '@particle-network/btc-connectkit';
import { Merlin } from '@particle-network/chains';


const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  useInitializeNativeCurrencyPrice();

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="relative flex flex-col flex-1">{children}</main>
        {/* <Footer /> */}
      </div>
      <Toaster />
    </>
  );
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const ScaffoldEthAppWithProviders = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ConnectProvider
      options={{
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID, // ---
        clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY, // Retrieved from https://dashboard.particle.network
        appId: process.env.NEXT_PUBLIC_APP_ID, // ---
        aaOptions: {
          accountContracts: {
            BTC: [
              {
                chainIds: [Merlin.id, MerlinTestnet.id], // The chain you'd like to use, Merlin in this case.
                version: '1.0.0', // Keep this as 1.0.0 for now.
              },
            ],
          },
        },
        walletOptions: {
          visible: true, // Whether or not the embedded wallet modal (for controlling the smart account) is shown.
        }
      }}
      // List of supported wallets.
      connectors={[
        new UnisatConnector(),
        new OKXConnector(),
        new BitgetConnector(),
        new TokenPocketConnector(),
        new BybitConnector(),
        new WizzConnector(),
        new XverseConnector(),
      ]}
    >
      <ScaffoldEthApp>{children}</ScaffoldEthApp>
    </ConnectProvider>
  );
};
