import { List, Map } from 'immutable';

// Empties the collection by determining the
// collection type, then retuning a new instance.
const empty = (collection) => {
  if (collection instanceof List) {
    return List();
  }
  if (collection instanceof Map) {
    return Map();
  }
  return null;
};

// List and Map instances.
const myList = List.of(1, 2);
const myMap = Map.of('one', 1, 'two', 2);

// Create new instances by emptying the
// existing instances.
const myEmptyList = empty(myList);
const myEmptyMap = empty(myMap);

console.log('myList', myList.toJS());
// -> myList [ 1, 2 ]
console.log('myEmptyList', myEmptyList.toJS());
// -> myEmptyList []
console.log('myMap', myMap.toJS());
// -> myMap { one: 1, two: 2 }
console.log('myEmptyMap', myEmptyMap.toJS());
// -> myEmptyMap {}
