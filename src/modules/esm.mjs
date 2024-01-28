import * as path from 'path'
import { readFile } from 'node:fs/promises'
import { release, version } from'os';
import { createServer as createServerHttp } from 'http';
import {fileURLToPath} from 'url'
import './files/c.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const jsonA = JSON.parse(await readFile(path.join(__dirname, './files/a.json'), 'utf8'))
const jsonB = JSON.parse(await readFile(path.join(__dirname, './files/b.json'), 'utf8'))

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
    unknownObject = jsonA;
} else {
    unknownObject = jsonB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});
