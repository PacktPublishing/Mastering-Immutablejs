import { List } from 'immutable';

const myList = List.of(1, 2, 3);

// Calling delete() will create a new List with the
// item at the specified index removed.
const myChangedList = myList.delete(0);

console.log('myList', myList.toJS());
//> myList [ 1, 2, 3 ]
console.log('myChangedList', myChangedList.toJS());
//> myChangedList [ 2, 3 ]
