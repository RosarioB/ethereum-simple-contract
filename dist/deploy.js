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
const hdwallet_provider_1 = __importDefault(require("@truffle/hdwallet-provider"));
const web3_1 = require("web3");
const compile_1 = require("./compile");
const seed_1 = require("./seed");
const properties_1 = require("./properties");
const utils_1 = require("./utils");
const seed = (0, seed_1.readSeedFromCsv)();
if (!(0, utils_1.isStringValid)(properties_1.apiKey)) {
    throw new Error('Apikey is not valid');
}
if (!(0, utils_1.isStringValid)(seed)) {
    throw new Error('Seed is not valid');
}
const provider = new hdwallet_provider_1.default(seed, properties_1.apiKey);
const web3 = new web3_1.Web3(provider);
const deploy = () => __awaiter(void 0, void 0, void 0, function* () {
    const accounts = yield web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);
    const result = yield new web3.eth.Contract(JSON.parse(compile_1.abi))
        .deploy({ data: compile_1.byteCode, arguments: ['Hi there!'] })
        .send({ gas: '1000000', from: accounts[0] });
    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();
});
deploy();
//# sourceMappingURL=deploy.js.map