# RNT-X
Vision
RNT-X envisions a world where community members can fully engage in sharing and renting resources without the limitations imposed by traditional rental systems. By leveraging blockchain technology, RNT-X aims to build a trusted and transparent ecosystem where people can securely rent and monetize their equipment, tools, and other assets. The platform is designed to eliminate the barriers of trust and inefficiency in peer-to-peer rentals, empowering users to explore new opportunities and foster connections within a vibrant, community-driven network.

Description
Problem Statement:
Traditional rental markets face significant challenges, including a lack of trust, disputes over the condition of items, and inefficient transaction processes. These issues often discourage people from participating in rental activities, limiting their access to essential tools and equipment. Moreover, the absence of transparency and accountability in user ratings and reviews exacerbates these problems, leading to a fragmented and unreliable rental experience. RNT-X addresses these pain points by offering a blockchain-powered solution that ensures security, transparency, and fairness in every transaction.

Project Description:
RNT-X is a revolutionary platform designed to transform the peer-to-peer rental market, catering to anyone seeking to rent or share their equipment, tools, and other assets. Unlike traditional rental services, RNT-X utilizes blockchain technology to offer a secure, transparent, and efficient rental experience.

Key Features:

1-Blockchain-Powered Transactions: RNT-X guarantees secure, immutable transactions, ensuring that all rental payments, earnings, and reviews are tamper-proof and transparent.

2-AI Inspection System with AR Technology: Users can conduct item inspections using augmented reality on their smartphones, with results securely stored on the blockchain, reducing disputes and enhancing trust.

3-Transparent Rating and Review System: User ratings and reviews are timestamped and stored on the blockchain, ensuring authenticity and aiding informed decision-making.

4-Private Verification with Zero-Knowledge Proofs (ZKPs): User, renter, and owner verification is conducted through Zero-Knowledge Proofs, ensuring that identity verification is completely private while maintaining trust and security within the platform.

5-Monetization Model: Smart contracts manage revenue-sharing agreements transparently and efficiently, minimizing costs and eliminating intermediaries, while incentivizing community engagement.

Uniqueness: RNT-X stands out with its advanced AI-driven inspections, a community-centric approach, a transparent rating system, private user verification through ZKPs, and an innovative smart contract-based monetization model. By fostering a supportive and collaborative environment, RNT-X goes beyond transactions, creating a dynamic Socialfi community where people can connect, share experiences, and engage meaningfully.

Integration: RNT-X integrates seamlessly with the broader web3 ecosystem, offering interoperability with decentralized finance (DeFi) protocols and other blockchain-based platforms. The platform's decentralized reputation system, private verification with ZKPs, and immutable inspection records further reinforce trust and reliability, positioning RNT-X as a leader in the blockchain-powered peer-to-peer rental space.
## Requirements

Before you begin, you need to install the following tools:

- [Node (v20 LTS)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)
- [Rust](https://rustup.rs/)
- [Foundry](https://book.getfoundry.sh/getting-started/installation)

## Quickstart

To get started with Rent Hub, follow the steps below:

1. Clone this repo & install dependencies

```
git clone git@github.com:0xSooki/se-2-foundry.git
cd se-2
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

or

```
anvil
```

or

This command starts a local Ethereum network using Foundry. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in the `Makefile`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the contract component or the example ui in the frontend. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

Run smart contract test with `yarn hardhat:test`

- Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`
- Edit your frontend in `packages/nextjs/pages`
- Edit your deployment scripts in `packages/hardhat/deploy`

## Deploying your Smart Contracts to a Live Network

Once you are ready to deploy your smart contracts, there are a few things you need to adjust.

1. Select the network

Instead of `yarn deploy` we will be using `yarn tdeploy` where the t stands for truffle as we will be using the truffle dashboard for deploying our contracts. You can change the defaultNetwork in `packages/hardhat/hardhat.config.ts.`

Check the `hardhat.config.ts` for the networks that are pre-configured. You can also add other network settings to the `hardhat.config.ts file`. Here are the [Alchemy docs](https://docs.alchemy.com/docs/how-to-add-alchemy-rpc-endpoints-to-metamask) for information on specific networks.

2. Start a truffle dashboard using the following command:

```
yarn dashboard
```

This will start the truffle dashboard where we will be able to deploy our smart contracts without having to copy our private keys anywhere. Run the command below to send the deployment request to our dashboard

```
yarn tdeploy
```

This will run our hardhat deploy scripts & forward it to the dasboard for additional signatures. The deployer account (the one with you sign in the truffle dashboard) is the account that will deploy your contracts. Additionally, the deployer account will be used to execute any function calls that are part of your deployment script.

3. Verify your smart contract

You can verify your smart contract on Etherscan by running:

```
yarn verify --network network_name <CONTRACT_ADDRESS> <CONSTRUCTOR_ARGS>
```

## Deploying your NextJS App

Run `yarn vercel` and follow the steps to deploy to Vercel. Once you log in (email, github, etc), the default options should work. It'll give you a public URL.

If you want to redeploy to the same production URL you can run `yarn vercel --prod`. If you omit the `--prod` flag it will deploy it to a preview/test URL.

**Make sure your `packages/nextjs/scaffold.config.ts` file has the values you need.**

**Hint**: We recommend connecting the project GitHub repo to Vercel so you the gets automatically deployed when pushing to `main`

## Disabling type and linting error checks

> **Hint**
> Typescript helps you catch errors at compile time, which can save time and improve code quality, but can be challenging for those who are new to the language or who are used to the more dynamic nature of JavaScript. Below are the steps to disable type & lint check at different levels

### Disabling commit checks

We run `pre-commit` [git hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) which lints the staged files and don't let you commit if there is an linting error.

To disable this, go to `.husky/pre-commit` file and comment out `yarn lint-staged --verbose`

```diff
- yarn lint-staged --verbose
+ # yarn lint-staged --verbose
```

### Deploying to Vercel without any checks

Vercel by default runs types and lint checks while developing `build` and deployment fails if there is a types or lint error.

To ignore types and lint error checks while deploying, use :

```shell
yarn vercel:yolo
```

### Disabling Github Workflow

We have github workflow setup checkout `.github/workflows/lint.yaml` which runs types and lint error checks every time code is **pushed** to `main` branch or **pull request** is made to `main` branch

To disable it, **delete `.github` directory**
