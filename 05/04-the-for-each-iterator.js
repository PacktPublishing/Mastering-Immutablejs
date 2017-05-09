import { List, Map } from 'immutable';

const myList = List.of(1, 2, 3);
const myMap = Map.of(
  'one', 1,
  'two', 2,
  'three', 3
);

// We go straight from a list, to iterating over
// an indexed sequence.
myList
  .toSeq()
  .forEach(item => console.log('myList', item));
// -> myList 1
// -> myList 2
// -> myList 3

// We go straight from a map, to iterating over
// a keyed sequence.
myMap
  .toSeq()
  .forEach(item => console.log('myMap', item));
// -> myMap 1
// -> myMap 2
// -> myMap 3
