import path from 'path';
import fs from 'fs';
import solc from 'solc';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootPath = __dirname.replace("dist", "");
const inboxPath = path.resolve(rootPath, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');
const input = {
    language: 'Solidity',
    sources: {
        'Inbox.sol': {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*'],
            },
        },
    },
};
export const compiledContract = JSON.parse(solc.compile(JSON.stringify(input))).contracts['Inbox.sol'].Inbox;
//# sourceMappingURL=compile.js.map