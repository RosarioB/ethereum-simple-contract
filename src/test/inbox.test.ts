//import assert from 'assert';
import ganache from 'ganache';
import { Contract, ContractAbi, Web3 } from 'web3';
import { abi, byteCode } from '../compile'; 

const web3: Web3 = new Web3(ganache.provider());
let accounts: string[];
let contract: Contract<ContractAbi>;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    contract = await new web3.eth.Contract(JSON.parse(abi)) 
        .deploy({ data: byteCode, arguments: ['My String'] }) 
        .send({ from: accounts[0], gas:'1000000' }); 
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(contract);
    } )
});