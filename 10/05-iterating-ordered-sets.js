import { List } from 'immutable';

const myList = List.of(
  1, 3, 1, 2, 3, 4, 1, 5,
  2, 4, 6, 1, 5, 2, 7, 1,
  8, 3, 7, 1, 4, 2, 8, 9
);
const myOrderedSet = myList
  .toOrderedSet()
  .sort()
  .reverse();

console.log('myList', myList.toJS());
// -> myList [ 1, 3, 1, 2, 3, 4, 1, 5, 2, 4, 6,
// ->          1, 5, 2, 7, 1, 8, 3, 7, 1, 4, 2,
// ->          8, 9 ]
myOrderedSet.forEach(v => console.log('myOrderedSet', v));
// -> myOrderedSet 9
// -> myOrderedSet 8
// -> myOrderedSet 7
// -> myOrderedSet 6
// -> myOrderedSet 5
// -> myOrderedSet 4
// -> myOrderedSet 3
// -> myOrderedSet 2
// -> myOrderedSet 1
