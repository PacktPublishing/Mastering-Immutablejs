import { List } from 'immutable';

const myList = List.of(2, 1, 4, 3);

// This works the same way as default sorting
// with JavaScript arrays. The main difference is
// that this creates a new list.
const mySortedList = myList.sort();

console.log('myList', myList.toJS());
// -> myList [ 2, 1, 4, 3 ]

console.log('mySortedList', mySortedList.toJS());
// -> mySortedList [ 1, 2, 3, 4 ]
