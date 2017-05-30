import { List, Map } from 'immutable';

const myList = List.of(1, 2, 3, 4, 5, 6);
const myMap = Map.of(
  'one', 1, 'two', 2,
  'three', 3, 'four', 4,
  'five', 5, 'six', 6
);

// A simple filter predicate that will return
// odd numbers. We're logging the call here
// so that we can see where it's called relative
// to the forEach() callback.
const predicate = (item) => {
  console.log('filtering', item);
  return item % 2;
};

// By converting to a sequence before filtering,
// we enable lazy evaluation. The forEach() callback
// "pulls" one item through the sequence at a time.
myList
  .toSeq()
  .filter(predicate)
  .forEach(item => console.log('myList', item));
  // -> filtering 1
  // -> myList 1
  // -> filtering 2
  // -> filtering 3
  // -> myList 3
  // -> filtering 4
  // -> filtering 5
  // -> myList 5
  // -> filtering 6

// We get identical results with maps.
myMap
  .toSeq()
  .filter(predicate)
  .forEach(item => console.log('myMap', item));
  // -> filtering 1
  // -> myMap 1
  // -> filtering 2
  // -> filtering 3
  // -> myMap 3
  // -> filtering 4
  // -> filtering 5
  // -> myMap 5
  // -> filtering 6
