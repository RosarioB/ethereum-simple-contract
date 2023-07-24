"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.byteCode = exports.abi = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const solc_1 = __importDefault(require("solc"));
const rootPath = __dirname.replace("dist", "");
const inboxPath = path_1.default.resolve(rootPath, 'contracts', 'Inbox.sol');
const source = fs_1.default.readFileSync(inboxPath, 'utf8');
const compiled = solc_1.default.compile(source, 1).contracts[':Inbox'];
const abi = compiled.interface;
exports.abi = abi;
const byteCode = compiled.bytecode;
exports.byteCode = byteCode;
//# sourceMappingURL=compile.js.map