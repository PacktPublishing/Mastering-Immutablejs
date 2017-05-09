import { List, Map } from 'immutable';

const myList = List.of(1, 2, 3);
const myMap = Map.of(
  'one', 1,
  'two', 2,
  'three', 3
);

// The filter callback function that's applied to each
// item in the collection. If the function returns true,
// the item is included in the resulting collection.
const filter = i => i === 1 || i === 2;

// The same filter function can be used to filter list
// items and map values.
const myFilteredList = myList.filter(filter);
const myFilteredMap = myMap.filter(filter);

console.log('myList', myList.toJS());
// -> myList [ 1, 2, 3 ]
console.log('myFilteredList', myFilteredList.toJS());
// -> myFilteredList [ 1, 2 ]

console.log('myMap', myMap.toJS());
// -> myMap { one: 1, two: 2, three: 3 }
console.log('myFilteredMap', myFilteredMap.toJS());
// -> myFilteredMap { one: 1, two: 2 }
