import { List, Set } from 'immutable';

// In most ways, lists and maps are the same.
const myList = List.of(1, 2, 3);
const mySet = Set.of(1, 2, 3);

console.log('myList', myList.toJS());
// -> myList [ 1, 2, 3 ]
console.log('mySet', mySet.toJS());
// -> mySet [ 1, 2, 3 ]

// Using get() with sets as though they're indexed
// collections doesn't work.
console.log('myList.get(0)', myList.get(0));
// -> myList.get(0) 1
console.log('mySet.get(0)', mySet.get(0));
// -> mySet.get(0) undefined

// Set iteration doesn't have a defined order,
// so iterating over sets could have unexpected
// results.
console.log('myList.forEach()');
myList.forEach(v => console.log(v));
// -> myList.forEach()
// -> 1
// -> 2
// -> 3
console.log('mySet.forEach()');
mySet.forEach(v => console.log(v));
// -> mySet.forEach()
// -> 1
// -> 2
// -> 3
