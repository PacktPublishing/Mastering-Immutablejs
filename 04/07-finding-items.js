import { List, Map } from 'immutable';

const myList = List.of(1, 2, 3);
const myMap = Map.of(
  'one', 1,
  'two', 2,
  'three', 3
);

// Finding collection items using the find() method. The predicate
// function returns true if it's the item we're looking for.
// If not item is found, undefined is returned.
const myFoundListItem = myList.find(v => v === 3);
const myNotFoundListItem = myList.find(v => v === 4);
const myFoundMapItem = myMap.find(v => v === 3);
const myNotFoundMapItem = myMap.find(v => v === 4);

console.log('myFoundListItem', myFoundListItem);
// -> myFoundListItem 3
console.log('myNotFoundListItem', myNotFoundListItem);
// -> myNotFoundListItem undefined
console.log('myFoundMapItem', myFoundMapItem);
// -> myFoundMapItem 3
console.log('myNotFoundMapItem', myNotFoundMapItem);
// -> myNotFoundMapItem undefined
