import { List } from 'immutable';

const myList = List.of(2, 1, 4, 3);

// Reversing does exactly that. It reverses the current
// order of the list items. So unless you're absolutely
// certain about the current sort order, this
// method could have unintended consequences.
const myReversedList = myList.reverse();

// If we want the expected behavior of reverse(),
// we have to sort() the collection first.
const mySortedReversedList = myList.sort().reverse();

// Sorting backwards will actually perform a sort,
// instead of just reversing the current order.
const myBackwardSortedList = myList.sortBy(i => -i);

console.log('myList', myList.toJS());
// -> myList [ 2, 1, 4, 3 ]

console.log('myReversedList', myReversedList.toJS());
// -> myReversedList [ 3, 4, 1, 2 ]

console.log('mySortedReversedList', mySortedReversedList.toJS());
// -> mySortedReversedList [ 4, 3, 2, 1 ]

console.log('myBackwardSortedList', myBackwardSortedList.toJS());
// -> myBackwardSortedList [ 4, 3, 2, 1 ]
