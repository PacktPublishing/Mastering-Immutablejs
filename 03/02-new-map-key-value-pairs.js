import { Map } from 'immutable';

// The initial map of numbers.
const myMap = Map.of(
  'one', 1,
  'two', 2,
  'three', 3
);

// Calling set() adds a new key-value pair to the
// map by creating a new Map instance.
const myChangedMap = myMap.set('four', 4);

console.log('myMap', myMap.toJS());
//> myMap { one: 1, two: 2, three: 3 }
console.log('myChangedMap', myChangedMap.toJS());
//> myChangedMap { one: 1, two: 2, three: 3, four: 4 }
