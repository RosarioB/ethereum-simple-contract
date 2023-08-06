import path from 'path';
import fs from 'fs';
import solc from 'solc';
import { fileURLToPath } from 'url';

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

const rootPath: string = __dirname.replace("dist", "");
const inboxPath: string = path.resolve(rootPath, 'contracts', 'Inbox.sol');
const source: string = fs.readFileSync(inboxPath, 'utf8');

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