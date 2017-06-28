import { List } from 'immutable';

const myList1 = List.of(1, 2, 3);
const myList2 = List.of(2, 3, 4, 5);
const myMergedList = myList1.merge(myList2);
const myMergedWithList = myList1.mergeWith(
  (a, b) => a === undefined ? b : a,
  myList2
);
const myMergedReversed = myList2.mergeWith(
  (a, b) => a === undefined ? b : a,
  myList1
);


console.log('myList1', myList1.toJS());
// -> myList1 [ 1, 2, 3 ]
console.log('myList2', myList2.toJS());
// -> myList2 [ 2, 3, 4, 5 ]
console.log('myMergedList', myMergedList.toJS());
// -> myMergedList [ 2, 3, 4, 5 ]
console.log('myMergedWithList', myMergedWithList.toJS());
// -> myMergedWithList [ 1, 2, 3, 5 ]
console.log('myMergedReversed', myMergedReversed.toJS());
// -> myMergedReversed [ 2, 3, 4, 5 ]
