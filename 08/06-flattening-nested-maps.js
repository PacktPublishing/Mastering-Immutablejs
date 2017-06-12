import { Map } from 'immutable';

const myMap = Map.of(
  'first', 1,
  'second', Map.of(
    'third', 3,
    'fourth', 4,
    'fifth', Map.of(
      'sixth', Map.of(
        'seventh', 7
      )
    )
  )
);

console.log('myMap', myMap.toJS());
// -> { first: 1,
// ->   second: {
// ->     third: 3,
// ->     fourth: 4,
// ->     fifth: {
// ->       sixth: { seventh: 7 } } } }

// When we flatten a map, we want a new map containing
// only keys that have primitive values. In other words,
// keys with Maps as values are recursively removed.
myMap
  .toSeq()
  .flatten()
  .filter((v, k) => k.startsWith('f'))
  .forEach((v, k) => console.log(k, v));
  // -> first 1
  // -> fourth 4
