import { List, Map } from 'immutable';

// Capitalizes the first letter of a given string.
const capitalize = s =>
  `${s.charAt(0).toUpperCase()}${s.slice(1)}`;

const myList = List.of(
  Map.of('first', 'joe', 'last', 'brown', 'age', 45),
  Map.of('first', 'john', 'last', 'smith', 'age', 32),
  Map.of('first', 'mary', 'last', 'wise', 'age', 56)
);

// Instead of mapping the list item to a value
// that already exists within the item, we're
// computing a new value. In this case, we need
// the capitalized name string instead of two
// string properties.
const myMappedList = myList.map(
  v => [
    capitalize(v.get('first')),
    capitalize(v.get('last'))
  ].join(' ')
);

console.log('myList', myList.toJS());
// -> myList [ { first: 'joe', last: 'brown', age: 45 },
// ->          { first: 'john', last: 'smith', age: 32 },
// ->          { first: 'mary', last: 'wise', age: 56 } ]

console.log('myMappedList', myMappedList.toJS());
// -> myMappedList [ 'Joe Brown', 'John Smith', 'Mary Wise' ]
