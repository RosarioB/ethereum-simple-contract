import assert from 'assert';
import ganache from 'ganache';
import { Contract, ContractAbi, Web3 } from 'web3';
import { compiledContract } from '../compile.js'; 

const { abi, evm } = compiledContract;
const web3: Web3 = new Web3(ganache.provider());
let accounts: string[];
let contract: Contract<ContractAbi>;
const INITAL_STRING: string = 'Hi There!';

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    contract = await new web3.eth.Contract(abi) 
        .deploy({ data: evm.bytecode.object, arguments: [INITAL_STRING] })
        .send({ from: accounts[0], gas:'1000000' }); 
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(contract.options.address)
    } );

    it('has a default message', async () => {
        const message: string = await contract.methods.message().call();
        assert.strictEqual(message, INITAL_STRING);
    });

    it('can change the message', async () => {
        const messageStr: string = 'New message'; 
        await contract.methods.setMessage(messageStr).send({ from: accounts[0] });
        const message: string = await contract.methods.message().call();
        assert.strictEqual(message, messageStr);
    });
});