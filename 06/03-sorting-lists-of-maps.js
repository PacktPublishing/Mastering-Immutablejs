import { List, Map } from 'immutable';

// Utility to create a simple sortBy() callback.
const prop = p => map => map.get(p);

// Utility to create a sort() callback. This is useful
// when we need to sort lists of maps by more than one
// property. We keep iterating over the properties
// until we find two that aren't equal.
const comp = (...props) => (a, b) => {
  for (let prop of props) {
    if (a.get(prop) > b.get(prop)) {
      return -1;
    }

    if (a.get(prop) < b.get(prop)) {
      return 1;
    }
  }
  return 0;
};

const myList = List.of(
  Map.of('name', 'ccc', 'age', 23),
  Map.of('name', 'aaa', 'age', 23),
  Map.of('name', 'ddd', 'age', 19),
  Map.of('name', 'bbb', 'age', 19)
);

// Sorting by a single property, using sortBy() and prop().
const byAge = myList
  .sortBy(prop('age'));

// Sorting by multiple properties, using sort() and comp().
const byAgeAndName = myList
  .sort(comp('age', 'name'))
  .reverse();

console.log('myList', myList.toJS());
// -> myList
// -> [ { name: 'ccc', age: 23 },
// ->   { name: 'aaa', age: 23 },
// ->   { name: 'ddd', age: 19 },
// ->   { name: 'bbb', age: 19 } ]

console.log('byAge', byAge.toJS());
// -> byAge
// -> [ { name: 'ddd', age: 19 },
// ->   { name: 'bbb', age: 19 },
// ->   { name: 'ccc', age: 23 },
// ->   { name: 'aaa', age: 23 } ]

console.log('byAgeAndName', byAgeAndName.toJS());
// -> byAgeAndName
// -> [ { name: 'bbb', age: 19 },
// ->   { name: 'ddd', age: 19 },
// ->   { name: 'aaa', age: 23 },
// ->   { name: 'ccc', age: 23 } ]
