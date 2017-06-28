import { Seq, Range } from 'immutable';

const mySeq1 = Range(1, 6)
  .filterNot((v) => {
    console.log('mySeq1', v);
    return v % 2;
  });
const mySeq2 = Range(6, 11)
  .filterNot((v) => {
    console.log('mySeq2', v);
    return v % 2;
  });

Seq()
  .concat(mySeq1, mySeq2)
  .forEach(v => console.log('result', v));
  // -> mySeq1 1
  // -> mySeq1 2
  // -> result 2
  // -> mySeq1 3
  // -> mySeq1 4
  // -> result 4
  // -> mySeq1 5
  // -> mySeq2 6
  // -> result 6
  // -> mySeq2 7
  // -> mySeq2 8
  // -> result 8
  // -> mySeq2 9
  // -> mySeq2 10
  // -> result 10
