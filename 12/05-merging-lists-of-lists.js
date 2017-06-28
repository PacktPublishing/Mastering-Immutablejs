import { List } from 'immutable';

const myList1 = List.of(
  List.of(1, 2),
  List.of(3, 4)
);
const myList2 = List.of(
  List.of(11, 21, 3),
  List.of(33, 44, 5)
);
const myMergedList = myList1.merge(myList2);
const myMergedWithList = myList1.mergeWith(
  (a, b) => a.mergeWith((a1, b1) => a1 === undefined ? b1 : a1, b),
  myList2
);

console.log('myList1', myList1.toJS());
// -> myList1 [ [ 1, 2 ], [ 3, 4 ] ]
console.log('myList2', myList2.toJS());
// -> myList2 [ [ 11, 21, 3 ], [ 33, 44, 5 ] ]
console.log('myMergedList', myMergedList.toJS());
// -> myMergedList [ [ 11, 21, 3 ], [ 33, 44, 5 ] ]
console.log('myMergedWithList', myMergedWithList.toJS());
// -> myMergedWithList [ [ 1, 2, 3 ], [ 3, 4, 5 ] ]
