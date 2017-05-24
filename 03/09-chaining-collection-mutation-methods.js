import { List, Map } from 'immutable';

const myList = List.of(1, 2, 3);
const myMap = Map.of('one', 1, 'two', 2);

// We can chain together insertion, and update
// list methods.
const myChangedList = myList
  .push(4)
  .set(3, 5)
  .update(3, n => n + 5);

  // We can chain together insertion, and update
  // map methods.
const myChangedMap = myMap
  .set('three', 3)
  .set('three', 5)
  .update('three', t => t + 5);

console.log('myList', myList.toJS());
// -> myList [ 1, 2, 3 ]
console.log('myMap', myMap.toJS());
// -> myMap { one: 1, two: 2 }
console.log('myChangedList', myChangedList.toJS());
// -> myChangedList [ 1, 2, 3, 10 ]
console.log('myChangedMap', myChangedMap.toJS());
// -> myChangedMap { one: 1, two: 2, three: 10 }
