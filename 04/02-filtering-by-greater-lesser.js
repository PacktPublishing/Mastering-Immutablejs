import { List, Map } from 'immutable';

const myList = List.of(1, 2, 3);
const myMap = Map.of(
  'one', 1,
  'two', 2,
  'three', 3
);

// Filters values that are less than 3.
const myFilteredList = myList.filter(i => i < 3);
// Filters values that are greater than 1.
const myFilteredMap = myMap.filter(i => i > 1);

console.log('myList', myList.toJS());
// -> myList [ 1, 2, 3 ]
console.log('myFilteredList', myFilteredList.toJS());
// -> myFilteredList [ 1, 2 ]

console.log('myMap', myMap.toJS());
// -> myMap { one: 1, two: 2, three: 3 }
console.log('myFilteredMap', myFilteredMap.toJS());
// -> myFilteredMap { two: 2, three: 3 }
