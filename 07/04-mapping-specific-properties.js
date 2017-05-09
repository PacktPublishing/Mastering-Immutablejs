import { List, Map } from 'immutable';

// Returns a new map that only includes the given
// property names.
const pick = (...props) => map => map
  .filter((v, k) => props.includes(k));

// Returns a new map that omits the given
// property names.
const omit = (...props) => map => map
  .filterNot((v, k) => props.includes(k));

const myList = List.of(
  Map.of('first', 'joe', 'last', 'brown', 'age', 45),
  Map.of('first', 'john', 'last', 'smith', 'age', 32),
  Map.of('first', 'mary', 'last', 'wise', 'age', 56)
);

// Using pick() and omit() as higher-order functions
// to create callbacks for map() to filter specific
// property names.
const myPickedList = myList.map(pick('first', 'last'));
const myOmittedList = myList.map(omit('first', 'last'));

console.log('myList', myList.toJS());
// -> myList [ { first: 'joe', last: 'brown', age: 45 },
// ->          { first: 'john', last: 'smith', age: 32 },
// ->          { first: 'mary', last: 'wise', age: 56 } ]

console.log('myPickedList', myPickedList.toJS());
// -> myPickedList [ { first: 'joe', last: 'brown' },
// ->                { first: 'john', last: 'smith' },
// ->                { first: 'mary', last: 'wise' } ]

console.log('myOmittedList', myOmittedList.toJS());
// -> myOmittedList [ { age: 45 },
// ->                 { age: 32 },
// ->                 { age: 56 } ]
