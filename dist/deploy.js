var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import HDWalletProvider from '@truffle/hdwallet-provider';
import { Web3 } from 'web3';
import { abi, byteCode } from './compile.js';
import { readSeedFromCsv } from './seed.js';
import { apiKey } from './properties.js';
import { isStringValid } from './utils.js';
const seed = readSeedFromCsv();
if (!isStringValid(apiKey)) {
    throw new Error('Apikey is not valid');
}
if (!isStringValid(seed)) {
    throw new Error('Seed is not valid');
}
const provider = new HDWalletProvider(seed, apiKey);
const web3 = new Web3(provider);
const deploy = () => __awaiter(void 0, void 0, void 0, function* () {
    const accounts = yield web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);
    const result = yield new web3.eth.Contract(JSON.parse(abi))
        .deploy({ data: byteCode, arguments: ['Hi there!'] })
        .send({ gas: '1000000', from: accounts[0] });
    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();
});
deploy();
//# sourceMappingURL=deploy.js.map