import { List, Set } from 'immutable';

// In most ways, lists and maps are the same.
const myList = List.of(1, 2, 3);
const mySet = Set.of(1, 2, 3);

console.log('myList', myList.toJS());
// -> myList [ 1, 2, 3 ]
console.log('mySet', mySet.toJS());
// -> mySet [ 1, 2, 3 ]
