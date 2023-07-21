"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ganache_1 = __importDefault(require("ganache"));
const web3_1 = require("web3");
const compile_1 = require("../compile");
const web3 = new web3_1.Web3(ganache_1.default.provider());
let accounts;
let contract;
beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
    accounts = yield web3.eth.getAccounts();
    contract = yield new web3.eth.Contract(JSON.parse(compile_1.abi))
        .deploy({ data: compile_1.byteCode, arguments: ['My String'] })
        .send({ from: accounts[0], gas: '1000000' });
}));
describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(contract);
    });
});
//# sourceMappingURL=inbox.test.js.map