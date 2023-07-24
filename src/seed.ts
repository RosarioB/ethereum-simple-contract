import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse/sync';

const rootPath = __dirname.replace("dist", "");
const csvFilePath = path.resolve(rootPath, 'files/seed.csv');
const headers = ['number', 'word'];
const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

type Row = {
    number: string;
    word: string
  };
  
export function readSeedFromCsv(): string {
  
  const csv: Row[] = parse(fileContent, {
    delimiter: ',',
    columns: headers,
    fromLine: 2
  });

  if(csv.length != 12) {
    throw new Error('Seed must have 12 words');
  }
  
  return csv.map(r => r.word).reduce((x, y) => x + ' ' + y);
}

