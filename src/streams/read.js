import * as fs from 'node:fs/promises'
import * as path from 'path'
import {fileURLToPath} from 'url'
import { stdout } from 'node:process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const read = async () => {
    // Write your code here

    const fileToRead = path.join(__dirname, './files/fileToRead.txt')
    const filehandle = await fs.open(fileToRead, 'r')
    const readStream = filehandle.createReadStream()
    readStream.pipe(stdout)
};

await read();