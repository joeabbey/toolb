## ToolB
Mostly forked from https://github.com/ProjectOpenSea/opensea-creatures
What's included:
## Requirements

### Node version

Either make sure you're running a version of node compliant with the `engines` requirement in `package.json`, or install Node Version Manager [`nvm`](https://github.com/creationix/nvm) and run `nvm use` to use the correct version of node.

## Installation

Run

```bash
yarn
```

If you run into an error while building the dependencies and you're on a Mac, run the code below, remove your `node_modules` folder, and do a fresh `yarn install`:

```bash
xcode-select --install # Install Command Line Tools if you haven't already.
sudo xcode-select --switch /Library/Developer/CommandLineTools # Enable command line tools
sudo npm explore npm -g -- npm install node-gyp@latest # Update node-gyp
```

## Deploying

### Deploying to the Rinkeby network.

1. To access a Rinkeby testnet node, you'll need to sign up for [Alchemy](https://dashboard.alchemyapi.io/signup?referral=affiliate:e535c3c3-9bc4-428f-8e27-4b70aa2e8ca5) and get a free API key. Click "View Key" and then copy the part of the URL after `v2/`.
   a. You can use [Infura](https://infura.io) if you want as well. Just change `ALCHEMY_KEY` below to `INFURA_KEY`.
2. Using your API key and the mnemonic for your Metamask wallet (make sure you're using a Metamask seed phrase that you're comfortable using for testing purposes), run:

```
export ALCHEMY_KEY="<your_alchemy_project_id>"
export MNEMONIC="<metmask_mnemonic>"
DEPLOY_CREATURES_SALE=1 yarn truffle deploy --network rinkeby
```

## Installation

Run

```bash
yarn
```

## Deploying

### Deploying to the Rinkeby network.

1. Follow the steps above to get a Rinkeby node API key
2. Using your API key and the mnemonic for your MetaMask wallet (make sure you're using a MetaMask seed phrase that you're comfortable using for testing purposes), run:

```
export ALCHEMY_KEY="<alchemy_project_id>" # or you can use INFURA_KEY
export MNEMONIC="<metmask_mnemonic>"
DEPLOY_ACCESSORIES_SALE=1 yarn truffle migrate --network rinkeby
```

### Deploying to the mainnet Ethereum network.

Make sure your wallet has at least a few dollars worth of ETH in it. Then run:

```
yarn truffle migrate --network live
```

Look for your newly deployed contract address in the logs! 🥳

### Viewing your items on OpenSea

OpenSea will automatically pick up transfers on your contract. You can visit an asset by going to `https://opensea.io/assets/CONTRACT_ADDRESS/TOKEN_ID`.

To load all your metadata on your items at once, visit [https://opensea.io/get-listed](https://opensea.io/get-listed) and enter your address to load the metadata into OpenSea! You can even do this for the Rinkeby test network if you deployed there, by going to [https://rinkeby.opensea.io/get-listed](https://rinkeby.opensea.io/get-listed).

### Troubleshooting

#### It doesn't compile!

Install truffle locally: `yarn add truffle`. Then run `yarn truffle migrate ...`.

You can also debug just the compile step by running `yarn truffle compile`.

#### It doesn't deploy anything!

This is often due to the truffle-hdwallet provider not being able to connect. Go to your [Alchemy Dashboard](https://dashboard.alchemyapi.io/signup?referral=affiliate:e535c3c3-9bc4-428f-8e27-4b70aa2e8ca5) (or infura.io) and create a new project. Use your "project ID" as your new `ALCHEMY_KEY` and make sure you export that command-line variable above.

