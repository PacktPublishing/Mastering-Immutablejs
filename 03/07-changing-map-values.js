import { Map } from 'immutable';

// A map with a single key-value pair.
const myMap = Map.of('one', 1);

// Calling set() to change the value of a given
// key results in a new map.
const myChangedMap = myMap.set('one', 'one');

console.log('myMap', myMap.toJS());
// -> myMap { one: 1 }
console.log('myChangedMap', myChangedMap.toJS());
// -> myChangedMap { one: 'one' }
