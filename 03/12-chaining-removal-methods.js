import { List, Map } from 'immutable';

const myList = List.of(1, 2, 3, 4);
const myMap = Map.of(
  'one', 1, 'two', 2,
  'three', 3, 'four', 4,
  'five', 5, 'six', 6
);

// We're chaining two remove() calls together with the
// same index argument because removing a list value
// results in all values to the right, shifting to the
// left by one index.
const myChangedList = myList
  .remove(1)
  .remove(1);

// With maps, we can chain remove() calls with one key
// each, pass several keys to removeAll(), or both.
const myChangedMap = myMap
  .remove('six')
  .removeAll(['five', 'four', 'three']);

console.log('myList', myList.toJS());
// -> myList [ 1, 2, 3, 4 ]
console.log('myMap', myMap.toJS());
// -> myMap { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6 }
console.log('myChangedList', myChangedList.toJS());
// -> myChangedList [ 1, 4 ]
console.log('myChangedMap', myChangedMap.toJS());
// -> myChangedMap { one: 1, two: 2 }
