import path from 'path';
import fs from 'fs';
import solc from 'solc';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootPath: string = __dirname.replace("dist", "");
const inboxPath: string = path.resolve(rootPath, 'contracts', 'Inbox.sol');
const source: string = fs.readFileSync(inboxPath, 'utf8');
const compiled  =  solc.compile(source, 1).contracts[':Inbox'];
export const abi = compiled.interface;
export const byteCode: string = compiled.bytecode;