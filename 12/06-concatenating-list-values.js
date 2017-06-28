import { List } from 'immutable';

const myList1 = List.of(1, 2, 3);
const myList2 = List.of(4, 5, 6);
const myList3 = List.of(7, 8, 9);
const myCombinedList1 = myList1.concat(
  myList2,
  myList3
);

console.log('myList1', myList1.toJS());
// -> myList1 [ 1, 2, 3 ]
console.log('myList2', myList2.toJS());
// -> myList2 [ 4, 5, 6 ]
console.log('myList3', myList3.toJS());
// -> myList3 [ 7, 8, 9 ]
console.log('myCombinedList1', myCombinedList1.toJS());
// -> myCombinedList1 [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
