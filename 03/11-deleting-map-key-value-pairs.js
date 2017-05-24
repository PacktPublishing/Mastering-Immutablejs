import { Map } from 'immutable';

const myMap = Map.of(
  'one', 1,
  'two', 2,
  'three', 3
);

// Calling delete() will create a new Map
// with the specified key-value removed.
const myChangedMap = myMap.remove('one');

console.log('myMap', myMap.toJS());
// -> myMap { one: 1, two: 2, three: 3 }
console.log('myChangedMap', myChangedMap.toJS());
// -> myChangedMap { three: 3, two: 2 }
