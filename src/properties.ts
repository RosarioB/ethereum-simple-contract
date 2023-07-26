import PropertiesReader from 'properties-reader';
import * as path from "path";

const rootPath = __dirname.replace("dist", "");
const propertiesPath = path.resolve(rootPath, 'files/application.properties');
const properties: PropertiesReader.Reader = PropertiesReader(propertiesPath);
export const apiKey: string = properties.get('api.key') as string ?? '';