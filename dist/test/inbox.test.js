var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import assert from 'assert';
import ganache from 'ganache';
import { Web3 } from 'web3';
import { abi, byteCode } from '../compile.js';
const web3 = new Web3(ganache.provider());
let accounts;
let contract;
const INITAL_STRING = 'Hi There!';
beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
    accounts = yield web3.eth.getAccounts();
    contract = yield new web3.eth.Contract(JSON.parse(abi))
        .deploy({ data: byteCode, arguments: [INITAL_STRING] })
        .send({ from: accounts[0], gas: '1000000' });
}));
describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(contract.options.address);
    });
    it('has a default message', () => __awaiter(void 0, void 0, void 0, function* () {
        const message = yield contract.methods.message().call();
        assert.strictEqual(message, INITAL_STRING);
    }));
    it('can change the message', () => __awaiter(void 0, void 0, void 0, function* () {
        const messageStr = 'New message';
        yield contract.methods.setMessage(messageStr).send({ from: accounts[0] });
        const message = yield contract.methods.message().call();
        assert.strictEqual(message, messageStr);
    }));
});
//# sourceMappingURL=inbox.test.js.map