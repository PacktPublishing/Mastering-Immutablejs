import { List, Map } from 'immutable';

const myList = List.of(1, 2, 3);
const myMap = Map.of(
  'one', 1,
  'two', 2,
  'three', 3
);

// Modifies the list by pushing a new item.
const myModifiedList = myList.push(4);
// Modifies the map by setting a new key/value.
const myModifiedMap = myMap.set('four', 4);
// Returns the same instance of the list because
// the first item is already 1.
const myUnmodifiedList = myList.set(0, 1);
// Returns the same instance of the map becuase
// this key/value already exists.
const myUnmodifiedMap = myMap.set('one', 1);

console.log('myList', myList.toJS());
// -> myList [ 1, 2, 3 ]
console.log('myMap', myMap.toJS());
// -> myMap { one: 1, two: 2, three: 3 }
console.log('myModifiedList', myModifiedList.toJS());
// -> myModifiedList [ 1, 2, 3, 4 ]
console.log('myModifiedMap', myModifiedMap.toJS());
// -> myModifiedMap { one: 1, two: 2, three: 3, four: 4 }
console.log('myUnmodifiedList', myUnmodifiedList.toJS());
// -> myUnmodifiedList [ 1, 2, 3 ]
console.log('myUnmodifiedMap', myUnmodifiedMap.toJS());
// -> myUnmodifiedMap { one: 1, two: 2, three: 3 }
console.log(
  'myList === myModifiedList',
  myList === myModifiedList
);
// -> myList === myModifiedList false
console.log(
  'myMap === myModifiedMap',
  myMap === myModifiedMap
);
// -> myMap === myModifiedMap false
console.log(
  'myList === myUnmodifiedList',
  myList === myUnmodifiedList
);
// -> myList === myUnmodifiedList true
console.log(
  'myMap === myUnmodifiedMap',
  myMap === myUnmodifiedMap
);
// -> myMap === myUnmodifiedMap true
