import {
  List,
  Map,
} from 'immutable';

// Passing other Immutable.js types works fine.
const myList = List(List([1, 2, 3]));
const firstMap = Map({ a: 1, b: 2, c: 3 });
const myMap = Map(firstMap);

// We get List and Map instances as expected.
console.log('myList', myList.get(0));
console.log('myMap', myMap.get('a'));

// But the same instance is reused. Why not? It can't
// change!
console.log('firstMap === myMap', firstMap === myMap);
