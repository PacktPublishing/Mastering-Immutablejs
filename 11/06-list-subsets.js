import { List } from 'immutable';

const myList = List.of(
  List.of(1, 2, 3),
  List.of(4, 5, 6),
  List.of(7, 8, 9)
);

const isSubset = List.of(1, 4, 7)
  .isSubset(myList.flatten());

const isSuperset = myList
  .flatten()
  .isSuperset(List.of(2, 5, 8));

console.log('isSubset', isSubset);
// -> isSubset true
console.log('isSuperset', isSuperset);
// -> isSuperset true
