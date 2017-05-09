import { Map } from 'immutable';

// Immutable.js Map keys can be anything, including other maps.
const myFancyMap = Map.of(
  Map.of('name', 'one'), 1,
  Map.of('name', 'two'), 2,
  Map.of('name', 'three'), 3
);

// If map keys are anything fancier than strings, we might have
// to filter using specific properties. In this case, we're using
// the name property of the Map.
const myFilteredMap = myFancyMap.filter(
  (v, k) => k.get('name').startsWith('t')
);

console.log('myFancyMap', myFancyMap.toJS());
// -> myFancyMap
// -> { 'Map { "name": "one" }': 1,
// ->   'Map { "name": "two" }': 2,
// ->   'Map { "name": "three" }': 3 }
console.log('myFilteredMap', myFilteredMap.toJS());
// -> myFilteredMap
// -> { 'Map { "name": "two" }': 2,
// ->   'Map { "name": "three" }': 3 }
