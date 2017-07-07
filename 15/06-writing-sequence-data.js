import os from 'os';
import fs from 'fs';
import { Range } from 'immutable';

const mySeq = Range(1)
  .filterNot(v => v % 10)
  .take(1000);

const write = (stream, data) => new Promise((resolve) => {
  if (stream.write(data.toString() + os.EOL)) {
    resolve();
  } else {
    stream.once('drain', () => resolve());
  }
});

const output = fs.createWriteStream(
  './output/06-writing-sequence-data'
);

output.on('close', () => {
  console.log('done');
});

mySeq.forEach(async (value) => {
  await write(output, value);
});

output.end();
