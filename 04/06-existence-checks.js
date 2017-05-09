import { List, Map } from 'immutable';

const myList = List.of(1, 2, 3);
const myMap = Map.of(
  'one', 1,
  'two', 2,
  'three', 3
);

// The has() method checks for indexes that exist in lists.
const myListHas2 = myList.has(2);
const myListHas3 = myList.has(3);
// The has() method checks for keys that exist in maps.
const myMapHasThree = myMap.has('three');
const myMapHasFour = myMap.has('four');
// The includes() method checks for values that exist in
// lists or maps.
const myListIncludes3 = myList.includes(3);
const myListIncludes4 = myList.includes(4);
const myMapIncludes3 = myMap.includes(3);
const myMapIncludes4 = myMap.includes(4);

console.log('myListHas2', myListHas2);
// -> myListHas2 true
console.log('myListHas3', myListHas3);
// -> myListHas3 false

console.log('myMapHasThree', myMapHasThree);
// -> myMapHasThree true
console.log('myMapHasFour', myMapHasFour);
// -> myMapHasFour false

console.log('myListIncludes3', myListIncludes3);
// -> myListIncludes3 true
console.log('myListIncludes4', myListIncludes4);
// -> myListIncludes4 false
console.log('myMapIncludes3', myMapIncludes3);
// -> myMapIncludes3 true
console.log('myMapIncludes4', myMapIncludes4);
// -> myMapIncludes4 false
