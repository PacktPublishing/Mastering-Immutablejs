import { List } from 'immutable';

const myList = List.of(1, 2, 3);

// We can chain together calls to push(), creating
// intermediary collections that are garbage-collected
// at the first opportunity.
const myChangedList = myList
  .push(4)
  .push(5, 6)
  .push(7, 8)
  .push(9);

console.log('myList', myList.toJS());
// -> myList [ 1, 2, 3 ]
console.log('myChangedList', myChangedList);
// -> myChangedList List [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
