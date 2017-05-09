import {
  List,
  Map,
} from 'immutable';

// The of() method is like a static class method.
// You don't need to pass it an intermediary array
// or object. Just the arguments used to build the
// collection.
const myList = List.of(1, 2, 3);
const myMap = Map.of(
  'a', 1,
  'b', 2,
  'c', 3
);

// The end result is the same List/Map.
console.log('myList', myList.get(2));
console.log('myMap', myMap.get('c'));
