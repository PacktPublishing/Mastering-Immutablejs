import { Seq } from 'immutable';

// Passing an array to Seq() creates and indexed
// sequence. Passing an object to Seq() creates
// a keyed sequence.
const myIndexedSeq = Seq([1, 2, 3]);
const myKeyedSeq = Seq({ one: 1, two: 2, three: 3 });

console.log('myIndexedSeq', myIndexedSeq.toJS());
// -> myIndexedSeq [ 1, 2, 3 ]
console.log('myKeyedSeq', myKeyedSeq.toJS());
// -> myKeyedSeq { one: 1, two: 2, three: 3 }
