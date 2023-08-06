import HDWalletProvider from '@truffle/hdwallet-provider';
import { Contract, ContractAbi, Web3 } from 'web3';
import { compiledContract } from './compile.js'; 
import { readSeedFromCsv } from './seed.js';
import { apiKey } from './properties.js';
import { isStringValid } from './utils.js';

const { abi, evm } = compiledContract;
const seed: string =  readSeedFromCsv();

if(!isStringValid(apiKey)){
    throw new Error('Apikey is not valid')
}

if(!isStringValid(seed)){
    throw new Error('Seed is not valid')
}

const provider: HDWalletProvider = new HDWalletProvider(
    seed, 
    apiKey 
);
const web3 = new Web3(provider);

const deploy = async () => {
   const  accounts = await web3.eth.getAccounts();
   console.log('Attempting to deploy from account', accounts[0]);

   const result: Contract<ContractAbi> = await new web3.eth.Contract(abi) 
    .deploy({ data: evm.bytecode.object, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] })

   console.log('Contract deployed to', result.options.address);

   provider.engine.stop();
}
deploy();
    