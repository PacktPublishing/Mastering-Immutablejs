import { List, Map } from 'immutable';

const myList = List.of(1, 2, 3);
const myMap = Map.of(
  'one', 1,
  'two', 2,
  'three', 3
);

// Sequences often start out as lists or maps,
// and are then turned into sequences before chains
// of lazy operations are called.
const myIndexedSeq = myList.toSeq();
const myKeyedSeq = myMap.toSeq();

console.log('myIndexedSeq', myIndexedSeq.toJS());
// -> myIndexedSeq [ 1, 2, 3 ]
console.log('myKeyedSeq', myKeyedSeq.toJS());
// -> myKeyedSeq { one: 1, two: 2, three: 3 }
