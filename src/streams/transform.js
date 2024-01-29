import process from 'node:process'
import { Transform } from 'node:stream';

const transform = async () => {
    // Write your code here 

    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
          callback(null, chunk.toString().split('').reverse().join(''))
        },
      })

      console.log('Press Ctrl(Command)+D to finish input')
      process.stdin.pipe(transformStream).pipe(process.stdout)

};

await transform();