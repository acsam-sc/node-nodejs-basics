import * as fs from 'node:fs/promises'
import * as path from 'path'
import {fileURLToPath} from 'url'
import * as zlib from 'zlib'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compress = async () => {
    // Write your code here 

    const fileToCompress = path.join(__dirname, './files/fileToCompress.txt')
    const compressedFile = path.join(__dirname, './files/archive.gz')
    const filehandleRead = await fs.open(fileToCompress, 'r')
    const filehandleWrite = await fs.open(compressedFile, 'w')
    const gzip = zlib.createGzip()
    const readStream = filehandleRead.createReadStream()
    const writeStream = filehandleWrite.createWriteStream()
    
    readStream.pipe(gzip)
        .pipe(writeStream)
};

await compress();