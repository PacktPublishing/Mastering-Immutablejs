import { List, Map } from 'immutable';

// List and Map instances.
const myList = List.of(1, 2);
const myMap = Map.of('one', 1, 'two', 2);

// Create new instances by emptying the
// existing instances.
const myEmptyList = myList.clear();
const myEmptyMap = myMap.clear();

console.log('myList', myList.toJS());
// -> myList [ 1, 2 ]
console.log('myEmptyList', myEmptyList.toJS());
// -> myEmptyList []
console.log('myMap', myMap.toJS());
// -> myMap { one: 1, two: 2 }
console.log('myEmptyMap', myEmptyMap.toJS());
// -> myEmptyMap {}
