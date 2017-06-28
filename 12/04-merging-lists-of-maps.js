import { List, Map } from 'immutable';

const myList1 = List.of(
  Map.of('one', 1, 'two', 2),
  Map.of('three', 3, 'four', 4)
);
const myList2 = List.of(
  Map.of('one', 11, 'two', 22, 'three', 3),
  Map.of('four', 44, 'five', 5, 'size', 6)
);
const myMergedList = myList1.merge(myList2);
const myMergedWithList = myList1.mergeWith(
  (a, b) => a.mergeWith(v => v, b),
  myList2
);

console.log('myList1', myList1.toJS());
// -> myList1 [ { one: 1, two: 2 }, { three: 3, four: 4 } ]
console.log('myList2', myList2.toJS());
// -> myList2 [ { one: 11, two: 22, three: 3 },
// ->           { four: 44, five: 5, size: 6 } ]
console.log('myMergedList', myMergedList.toJS());
// -> myMergedList [ { one: 11, two: 22, three: 3 },
// ->                { four: 44, five: 5, size: 6 } ]
console.log('myMergedWithList', myMergedWithList.toJS());
// -> myMergedWithList [ { one: 1, two: 2, three: 3 },
// ->                    { three: 3, four: 4, five: 5, size: 6 } ]
