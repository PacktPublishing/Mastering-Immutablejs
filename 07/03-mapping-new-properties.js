import { List, Map } from 'immutable';

// Capitalizes the first letter of a given string.
const capitalize = s =>
  `${s.charAt(0).toUpperCase()}${s.slice(1)}`;

const myList = List.of(
  Map.of('first', 'joe', 'last', 'brown', 'age', 45),
  Map.of('first', 'john', 'last', 'smith', 'age', 32),
  Map.of('first', 'mary', 'last', 'wise', 'age', 56)
);

// Instead of mapping the list of maps to a list
// of name strings, we map it to a new list of maps.
// We're simply adding a new name property to each
// item.
const myMappedList = myList.map(
  v => v.set('name', [
    capitalize(v.get('first')),
    capitalize(v.get('last'))
  ].join(' '))
);

console.log('myList', myList.toJS());
// -> myList [ { first: 'joe', last: 'brown', age: 45 },
// ->          { first: 'john', last: 'smith', age: 32 },
// ->          { first: 'mary', last: 'wise', age: 56 } ]

console.log('myMappedList', myMappedList.toJS());
// -> myMappedList [ { first: 'joe', last: 'brown', age: 45, name: 'Joe Brown' },
// ->                { first: 'john', last: 'smith', age: 32, name: 'John Smith' },
// ->                { first: 'mary', last: 'wise', age: 56, name: 'Mary Wise' } ]
