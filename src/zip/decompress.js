import * as fs from 'node:fs/promises'
import * as path from 'path'
import {fileURLToPath} from 'url'
import * as zlib from 'zlib'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const decompress = async () => {
    // Write your code here 

    const fileToDecompress = path.join(__dirname, './files/archive.gz')
    const decompressedFiles = path.join(__dirname, './files/fileToCompress.txt')
    const filehandleRead = await fs.open(fileToDecompress, 'r')
    const filehandleWrite = await fs.open(decompressedFiles, 'w')
    const gzip = zlib.createGunzip()
    const readStream = filehandleRead.createReadStream()
    const writeStream = filehandleWrite.createWriteStream()
    
    readStream.pipe(gzip)
        .pipe(writeStream)

};

await decompress();