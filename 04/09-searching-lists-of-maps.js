import {
  is as _is,
  List,
  Map
} from 'immutable';

// A utility for creating callback functions that use
// Immutable.js is() for equality checking.
const is = a => b => _is(a, b);

const myList = List.of(
  Map.of('one', 1),
  Map.of('two', 2),
  Map.of('three', 3)
);

// The includes() method uses Immutable.js is() for equality.
// We can use our is() utility function when we want the same
// type of equality checking for filter operations.
const includesOne = myList.includes(Map.of('one', 1));
const myFilteredList = myList.filterNot(is(Map.of('one', 1)));

console.log('includesOne', includesOne);
// -> includesOne true
console.log('myFilteredList', myFilteredList.toJS());
// -> myFilteredList [ { two: 2 }, { three: 3 } ]
