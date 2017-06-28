import { Map } from 'immutable';

const myMap1 = Map.of(
  Map.of('name', 'one'), 1,
  Map.of('name', 'two'), 2,
  Map.of('name', 'three'), 3
);
const myMap2 = Map.of(
  Map.of('name', 'two'), 22,
  Map.of('name', 'three'), 33,
  Map.of('name', 'four'), 4
);
const myMergedMap = myMap1.merge(myMap2);
const myMergedWith = myMap1.mergeWith(
  v => v,
  myMap2
);

console.log('myMap1', myMap1.toJS());
// -> myMap1 { 'Map { "name": "one" }': 1,
// ->          'Map { "name": "two" }': 2,
// ->          'Map { "name": "three" }': 3 }
console.log('myMap2', myMap2.toJS());
// -> myMap2 { 'Map { "name": "two" }': 22,
// ->          'Map { "name": "three" }': 33,
// ->          'Map { "name": "four" }': 4 }
console.log('myMergedMap', myMergedMap.toJS());
// -> myMergedMap { 'Map { "name": "one" }': 1,
// ->               'Map { "name": "two" }': 22,
// ->               'Map { "name": "three" }': 33,
// ->               'Map { "name": "four" }': 4 }
console.log('myMergedWith', myMergedWith.toJS());
// -> myMergedWith { 'Map { "name": "one" }': 1,
// ->                'Map { "name": "two" }': 2,
// ->                'Map { "name": "three" }': 3,
// ->                'Map { "name": "four" }': 4 }
