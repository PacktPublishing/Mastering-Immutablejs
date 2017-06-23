import { List, Map } from 'immutable';

// This works like diffing lists except that we have
// to convert the maps into a list of key-value pair
// lists. Then we can do our usual filter, then
// convert them to a map. The end result is
// a map with the key value pairs that aren't
// in every map.
const difference = (...maps) =>
  Map(List()
    .concat(...maps.map(m => m.entrySeq()))
    .map(List)
    .countBy(v => v)
    .filter(v => v < maps.length)
    .keySeq());

// Intersection is the same as diffing except that
// we want key-value pairs that exist in every map
// argument.
const intersection = (...maps) =>
  Map(List()
    .concat(...maps.map(m => m.entrySeq()))
    .map(List)
    .countBy(v => v)
    .toSeq()
    .filter(v => v === maps.length)
    .keySeq());

const myMap1 = Map.of(
  'one', 1, 'two', 2, 'three', 3
);

const myMap2 = Map.of(
  'one', 1, 'three', 3, 'four', 4
);

const myMap3 = Map.of(
  'one', 1, 'two', 2, 'five', 5
);

console.log('difference');
difference(myMap1, myMap2, myMap3)
  .forEach((v, k) => console.log(k, v));
// -> difference
// -> two 2
// -> three 3
// -> four 4
// -> five 5

console.log('intersection');
intersection(myMap1, myMap2, myMap3)
  .forEach((v, k) => console.log(k, v));
// -> intersection
// -> one 1
