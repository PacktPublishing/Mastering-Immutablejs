import {
  List,
  Map
} from 'immutable';

// Lists can take Javascript arrays while Maps can
// take Javascript objects.
const myList = List([1, 2, 3]);
const myMap = Map({ a: 1, b: 2, c: 3 });

// Lists and Maps have a get() method.
console.log('myList', myList.get(1));
// -> myList 2
console.log('myMap', myMap.get('b'));
// -> myMap 2
