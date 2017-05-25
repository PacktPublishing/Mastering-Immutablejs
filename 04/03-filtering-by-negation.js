import { Map } from 'immutable';

const myMap = Map.of(
  'one', 1,
  'two', 2,
  'three', 3
);

// Returns truthy if the argument is odd.
const myFilter = i => i % 2;

// Filters the odd values in in the collection.
const myOddsMap = myMap.filter(myFilter);
// Filters the even values by negating the filter() result.
const myEvensMap = myMap.filterNot(myFilter);

console.log('myMap', myMap.toJS());
// -> myMap { one: 1, two: 2, three: 3 }
console.log('myOddsMap', myOddsMap.toJS());
// -> myOddsMap { one: 1, three: 3 }
console.log('myEvensMap', myEvensMap.toJS());
// -> myEvensMap { two: 2 }
