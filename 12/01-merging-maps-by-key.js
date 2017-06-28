import { Map } from 'immutable';

const myMap1 = Map.of(
  'one', 1, 'two', 2, 'three', 3
);
const myMap2 = Map.of(
  'two', 22, 'three', 33, 'four', 4
);
const myMergedMap = myMap1.merge(myMap2);
const myMergedWithMap = myMap1.mergeWith(
  v => v,
  myMap2
);

console.log('myMap1', myMap1.toJS());
// -> myMap1 { one: 1, two: 2, three: 3 }
console.log('myMap2', myMap2.toJS());
// -> myMap2 { two: 22, three: 33, four: 4 }
console.log('myMergedMap', myMergedMap.toJS());
// -> myMergedMap { one: 1, two: 22, three: 33, four: 4 }
console.log('myMergedWithMap', myMergedWithMap.toJS());
// -> myMergedWithMap { one: 1, two: 2, three: 3, four: 4 }
