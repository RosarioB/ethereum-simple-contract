# ethereum-simple-contract
This branch aims at compile, test and deploy a solidity contract on the Ethereum test network Sepolia.

## Project Structure

The folder ***contracts*** contains our contract ***Inbox.sol***.

In the folder ***src*** we can find:
* the folder ***test*** which contains the file ***inbox.test.ts*** used to test the contract.
* the file ***compile.ts*** which is used to compile the contract by means of the  ***solc*** library.
* the file ***deploy.ts*** which is used to deploy the contract on the Ethereum blockchain.
* the file ***properties.ts*** which is used to read the property api.key from the file application.properties.
* the file ***seed.ts*** which is used to read the seed phrase from the file seed.csv.

In the folder ***files*** we finde two files:
* ***application.properties*** the property ***api.key*** contains the link to the API services which allows you to deploy the contract to the Ethereum network. I have used the Infura API key for the Sepolia network. An example of an Infura API URL is `https://sepolia.infura.io/v3/############################`
*  ***seed.csv*** contains the 12 words of your Ethereum account. It is needed to deploy the contract to the blockchain. 

## Project Set Up
1. After having cloned the repository to our local machine we have to run `npm install` to download alla the dependencies.
2. Then we need to modify two files in the node_modules directory otherwise the project will not compile:
     * The first one is `node_modules\web3-eth-contract\lib\types\contract.d.ts`.
          * At line 251 we need to replace `ContractConstructorArgs<Abi>` with `unknown[]`
          * At line 6 we need to replace `(...args: Method['Inputs'])` with `(...args: Method[unknown[]])`
     * The second one is `node_modules\web3\lib\types\web3.d.ts`.
          * We need to replace line 22 `constructor(provider?: SupportedProviders<EthExecutionAPI> | string);` with `constructor(provider?: SupportedProviders<EthExecutionAPI> | HDWalletProvider | string);`
      
## Execute the code
To compile the code just run `npm run tsc`.

To run the tests on the contract run `npm run test`.

To deploy the contract run `npm run deploy`.

## Warning
Be careful with your seed phrase: if you have some real Ether on your Ethereum account on the main Ethereum network and someone gets the seed phrase you can lose your money. I suggest you to use a different Ethereum account only to work with the Sepolia network.
To get the Ether on the Sepolia network you can use a faucet like [this](https://sepolia-faucet.pk910.de/#/).


