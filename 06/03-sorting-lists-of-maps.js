import { List, Map } from 'immutable';

// Utility to create a simple sortBy() callback.
const prop = p => map => map.get(p);

// Utility to create a sort() callback. This is useful
// when we need to sort lists of maps by more than one
// property. We keep iterating over the properties
// until we find two that aren't equal.
const comp = (order, ...props) => (a, b) => {
  for (const p of props) {
    if (a.get(p) > b.get(p)) {
      return order * 1;
    }

    if (a.get(p) < b.get(p)) {
      return order * -1;
    }
  }
  return 0;
};

const asc = (...props) => comp(1, ...props);
const desc = (...props) => comp(-1, ...props);

const myList = List.of(
  Map.of('name', 'ccc', 'age', 23),
  Map.of('name', 'aaa', 'age', 23),
  Map.of('name', 'ddd', 'age', 19),
  Map.of('name', 'bbb', 'age', 19)
);

// Sorting by a single property, using sortBy() and prop().
const byAge = myList
  .sortBy(prop('age'));

// Sorting by multiple properties, using sort() and asc().
const byAgeAndName = myList
  .sort(asc('age', 'name'));

// Sorting by multiple properties, using sort() and desc().
const byAgeAndNameDesc = myList
  .sort(desc('age', 'name'));

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
// -> byAgeAndName [ { name: 'ccc', age: 23 }
// ->                { name: 'aaa', age: 23 },
// ->                { name: 'ddd', age: 19 },
// ->                { name: 'bbb', age: 19 } ]

console.log('byAgeAndNameDesc', byAgeAndNameDesc.toJS());
// -> byAgeAndNameDesc [ { name: 'bbb', age: 19 },
// ->                    { name: 'ddd', age: 19 },
// ->                    { name: 'aaa', age: 23 },
// ->                    { name: 'ccc', age: 23 } ]
