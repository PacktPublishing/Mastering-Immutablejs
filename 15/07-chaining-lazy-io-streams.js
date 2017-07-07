import fs from 'fs';
import os from 'os';
import {
  Writable,
  Transform
} from 'stream';
import { Seq } from 'immutable';

const seqTransform = new Transform({
  objectMode: true,
  transform(chunk, encoding, callback) {
    const last = this.last || '';
    const words = (last + chunk.toString()).split(os.EOL);

    this.last = words[words.length - 1];
    this.push(Seq(words));

    callback();
  }
});

const filterAndMapTransform = new Transform({
  objectMode: true,
  transform(seq, encoding, callback) {
    seq
      .filter(v => v.length >= 15)
      .map(v => v.toUpperCase())
      .forEach(v => this.push(v));

    callback();
  }
});

const myWritable = new Writable({
  write(chunk, encoding, callback) {
    console.log('writing', chunk.toString());
    callback();
  }
});

const wordInput = fs.createReadStream('./input/words');

wordInput
  .pipe(seqTransform)
  .pipe(filterAndMapTransform)
  .pipe(myWritable);
