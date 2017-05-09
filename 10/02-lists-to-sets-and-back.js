import { List } from 'immutable';

// A list with duplicates.
const myList = List.of(1, 1, 2, 2, 3, 3);

// Converting a list to a set will remove duplicates.
// You can then convert the list back to a list if needed.
const myUniqueList = myList
  .toSet()
  .toList();

console.log('myList', myList.toJS());
// -> myList [ 1, 1, 2, 2, 3, 3 ]
console.log('myUniqueList', myUniqueList.toJS());
// -> myUniqueList [ 1, 2, 3 ]
