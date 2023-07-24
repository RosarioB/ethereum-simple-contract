import path from 'path';
import fs from 'fs';
import solc from 'solc';

const rootPath: string = __dirname.replace("dist", "");
const inboxPath: string = path.resolve(rootPath, 'contracts', 'Inbox.sol');
const source: string = fs.readFileSync(inboxPath, 'utf8');
const compiled  =  solc.compile(source, 1).contracts[':Inbox'];
const abi = compiled.interface;
const byteCode: string = compiled.bytecode;

export { abi, byteCode };

