import { List, Map } from 'immutable';

// This utility produces a function that compares a
// map to another map. The supplied map is checked
// against the map that's passed to the returned
// function when called. The comparison is done
// by converting both maps to lists of key/pair lists,
// then using the isSubset() method.
const mapIncludes = subset => superset =>
  subset
    .entrySeq()
    .map(List)
    .isSubset(
      superset
        .entrySeq()
        .map(List)
      );

const myList = List.of(
  Map.of('one', 1, 'two', 2, 'three', 3),
  Map.of('one', 1, 'two', 2, 'four', 4),
  Map.of('one', 1, 'three', 3, 'four', 4)
);

// We can pass simple maps to compare, without the need
// to write a bunch of comparison logic.
const filteredOneTwo = myList.filter(
  mapIncludes(Map.of('one', 1, 'two', 2))
);
const filteredFourFive = myList.filter(
  mapIncludes(Map.of('four', 4, 'five', 5))
);

console.log('myList', myList.toJS());
// -> myList
// -> [ { one: 1, two: 2, three: 3 },
// ->   { one: 1, two: 2, four: 4 },
// ->   { one: 1, three: 3, four: 4 } ]
console.log('filteredOneTwo', filteredOneTwo.toJS());
// -> filteredOneTwo
// -> [ { one: 1, two: 2, three: 3 },
// ->   { one: 1, two: 2, four: 4 } ]
console.log('filteredFourFive', filteredFourFive.toJS());
// -> filteredFourFive []
