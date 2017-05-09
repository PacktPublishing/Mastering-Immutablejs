import { List, Map } from 'immutable';

// The advantage of using clear() to delete
// entire collections is that we don't need to
// depending on type-checking. If the instance
// is already empty, it's reused.
const empty = (collection) => collection.clear();

// List and Map instances.
const myList = List.of(1, 2);
const myMap = Map.of('one', 1, 'two', 2);

// Create new instances by emptying the
// existing instances.
const myEmptyList = empty(myList);
const myEmptyMap = empty(myMap);

console.log('myList', myList.toJS());
//> myList [ 1, 2 ]
console.log('myEmptyList', myEmptyList.toJS());
//> myEmptyList []
console.log('myMap', myMap.toJS());
//> myMap { one: 1, two: 2 }
console.log('myEmptyMap', myEmptyMap.toJS());
//> myEmptyMap {}
