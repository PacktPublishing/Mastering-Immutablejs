import {
  List,
  Map
} from 'immutable';

// Passing other Immutable.js types works fine.
const myList = List(List([1, 2, 3]));
const firstMap = Map({ a: 1, b: 2, c: 3 });
const myMap = Map(firstMap);

// We get List and Map instances as expected.
console.log('myList', myList.get(0));
// -> myList 1
console.log('myMap', myMap.get('a'));
// -> myMap 1

// But the same instance is reused. Why not? It can't
// change!
console.log('firstMap === myMap', firstMap === myMap);
// -> firstMap === myMap true

const myFunc = map => Map(map).toJS();

console.log('myFunc(object)', myFunc({ a: 1, b: 2, c: 3 }));
// -> myFunc(object) { a: 1, b: 2, c: 3 }
console.log('myFunc(map)', myFunc(myMap));
// -> myFunc(map) { a: 1, b: 2, c: 3 }
