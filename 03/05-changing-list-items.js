import { List } from 'immutable';

// A single-item list - the number 1.
const myList = List.of(1);

// Calling set() with the index of the item to change
// and the new value, creates a new list.
const myChangedList = myList.set(0, 2);

console.log('myList', myList.toJS());
// -> myList [ 1 ]
console.log('myChangedList', myChangedList.toJS());
// -> myChangedList [ 2 ]
