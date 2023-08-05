import PropertiesReader from 'properties-reader';
import * as path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootPath = __dirname.replace("dist", "");
const propertiesPath = path.resolve(rootPath, 'files/application.properties');
const properties: PropertiesReader.Reader = PropertiesReader(propertiesPath);
export const apiKey: string = properties.get('api.key') as string ?? '';