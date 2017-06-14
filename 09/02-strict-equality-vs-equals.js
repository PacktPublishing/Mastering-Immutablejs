import { Map } from 'immutable';

const myMap = Map.of('first', 1);
const myModifiedMap = myMap.set('first', 'first');
const myUnmodifiedMap = myMap.set('first', 1);

console.log('myMap', myMap.toJS());
// -> myMap { first: 1 }
console.log('myModifiedMap', myModifiedMap.toJS());
// -> myModifiedMap { first: 'first' }
console.log('myUnmodifiedMap', myUnmodifiedMap.toJS());
// -> myUnmodifiedMap { first: 1 }
console.log(
  'myMap === myModifiedMap',
  myMap === myModifiedMap
);
// -> myMap === myModifiedMap false
console.log(
  'myMap === myUnmodifiedMap',
  myMap === myUnmodifiedMap
);
// -> myMap === myUnmodifiedMap true
console.log(
  'myMap.equals(myModifiedMap)',
  myMap.equals(myModifiedMap)
);
// -> myMap.equals(myModifiedMap) false
console.log(
  'myMap.equals(myUnmodifiedMap)',
  myMap.equals(myUnmodifiedMap)
);
// -> myMap.equals(Map.of('first', 1)) true

// Strict equality is much faster than using equals(), because
// equals() has to do a lot more work. However, you can see
// here that you have to be careful in cases where the
// values are actually equal, yet strict equality returns
// evaluates to false.
console.log(
  'myMap.equals(Map.of(\'first\', 1))',
  myMap.equals(Map.of('first', 1))
);
// -> myMap.equals(Map.of('first', 1)) true
console.log(
  'myMap === Map.of(\'first\', 1)',
  myMap === Map.of('first', 1)
);
// -> myMap === Map.of('first', 1) false
