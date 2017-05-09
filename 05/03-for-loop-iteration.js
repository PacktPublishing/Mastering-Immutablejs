import { List, Map } from 'immutable';

const myList = List.of(1, 2, 3);
const myMap = Map.of(
  'one', 1,
  'two', 2,
  'three', 3
);

for (let item of myList.toSeq()) {
  console.log('myList', item);
  // -> myList 1
  // -> myList 2
  // -> myList 3
}

for (let item of myMap.toSeq()) {
  console.log('myMap', item);
  // -> myMap [ 'one', 1 ]
  // -> myMap [ 'two', 2 ]
  // -> myMap [ 'three', 3 ]
}
