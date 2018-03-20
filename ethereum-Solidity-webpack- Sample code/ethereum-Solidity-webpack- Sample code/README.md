

# Ethereum Solidity Webpack 
Example Ethereum (Solidity) smart contract decentralized app with Webpack, demonstrating the following features and behaviors:

- Simple Ethereum decentralized app (dapp) with:
  - Smart contract written in Solidity
  - A simple viewer written in Vanilla JavaScript.
- Minimal reinvention. Using only tools that are already familiar for front-end JavaScript developers.
- Smart contract is based on The Coin 
- Direct importing of Solidity code and instantiation of smart contract via webpack.


## How to run

1. Run a local Ethereum node with JSON-RPC listening at port 8545 _(default)_.
  ```bash
  # Using testrpc (recommended)
  testrpc

  # If you are running Geth, 
  # make sure to run in testnet or private net and enable rpc
  geth --testnet --rpc
  ```

1. Install dependencies

  ```bash
  npm install
  ```

1. Run, during development

  ```bash
  npm start
  ```

  Once webpack build is done, open `index.html` in your favorite web browser.

  Webpack is now started in `--watch` mode, any changes done at JavaScript or Solidity files would automatically rebuild the affected modules.

1. Build, for deployment

  ```bash
  npm run build
  ```

  Only the `static` directory is required to be hosted and served.

1. Run tests

  ```bash
  npm test
  ```

## Additional notes

1. web3-loader can be further configured, for example to reuse a deployed contract instead of redeploying at every build.

## Comments, bugs & collaborations

Pull requests, bug reports are welcomed.

This example app is initaited by San G
