import { List, Map } from 'immutable';

const myList = List.of(
  Map.of('first', 1, 'second', 2),
  Map.of('first', 3, 'second', 4),
  Map.of('first', 5, 'second', 6)
);

// Mapping Immutable.js lists works the same as
// mapping JavaScript arrays. Here, we're producing
// a new list and we're using get() for each map
// item in the list to get the value we're after.
const myMappedList = myList
  .map(v => v.get('second'));

console.log('myList', myList.toJS());
// -> myList [
// ->   { first: 1, second: 2 },
// ->   { first: 3, second: 4 },
// ->   { first: 5, second: 6 } ]

console.log('myMappedList', myMappedList.toJS());
// -> myMappedList [ 2, 4, 6 ]
