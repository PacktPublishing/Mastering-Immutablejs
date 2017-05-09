import { Map } from 'immutable';

const myMap = Map.of(
  'one', 1,
  'two', 2,
  'three', 3
);

// The key of the key/value pair is the second
// argument. We're looking for keys the have an "o".
const myFilteredMap = myMap.filter(
  (v, k) => k.includes('o')
);

console.log('myMap', myMap.toJS());
// -> myMap { one: 1, two: 2, three: 3 }
console.log('myFilteredMap', myFilteredMap.toJS());
// -> myFilteredMap { one: 1, two: 2 }
