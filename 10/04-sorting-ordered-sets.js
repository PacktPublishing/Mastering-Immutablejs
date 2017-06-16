import { List } from 'immutable';

const myList = List.of(
  1, 3, 1, 2, 3, 4, 1, 5,
  2, 4, 6, 1, 5, 2, 7, 1,
  8, 3, 7, 1, 4, 2, 8, 9
);
const myUniqueList = myList
  .toOrderedSet()
  .sort()
  .reverse()
  .toList();

console.log('myList', myList.toJS());
// -> myList [ 1, 3, 1, 2, 3, 4, 1, 5, 2, 4, 6,
// ->          1, 5, 2, 7, 1, 8, 3, 7, 1, 4, 2,
// ->          8, 9 ]
console.log('myUniqueList', myUniqueList.toJS());
// -> myUniqueList [ 9, 8, 7, 6, 5,
// ->                4, 3, 2, 1 ]
