import { Map } from 'immutable';

const myMap = Map.of(
  'one', 1,
  'two', 2,
  'three', 3
);
const myChangedMap = myMap
  .set('four', 4)
  .set('five', 5)
  .set('six', 6);

console.log('myMap', myMap.toJS());
// -> myMap { one: 1, two: 2, three: 3 }
console.log('myChangedMap', myChangedMap.toJS());
// -> myChangedMap { one: 1, two: 2,
// ->                three: 3, four: 4,
// ->                five: 5, six: 6 }
