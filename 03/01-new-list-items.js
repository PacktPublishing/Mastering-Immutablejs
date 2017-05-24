import { List } from 'immutable';

// The initial list of numbers.
const myList = List.of(1, 2, 3);

// Calling push() creates a new List instance.
const myChangedList = myList.push(4);

// myList is unchanged, myChangedList has the
// new value.
console.log('myList', myList.toJS());
// -> myList [ 1, 2, 3 ]
console.log('myChangedList', myChangedList.toJS());
// -> myChangedList [ 1, 2, 3, 4 ]
