import * as fs from 'node:fs/promises'
import * as path from 'path'
import {fileURLToPath} from 'url'
import process from 'node:process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const write = async () => {
    // Write your code here 
    const fileToWrite = path.join(__dirname, './files/fileToWrite.txt')
    const filehandle = await fs.open(fileToWrite, 'w')
    const writeStream = filehandle.createWriteStream(fileToWrite)
    console.log('Press Ctrl(Command)+D to exit')
    process.stdin.pipe(writeStream)
    process.stdin.resume()

};

await write();