import { List, Map } from 'immutable';

// Capitalizes the first letter of a given string.
const capitalize = s =>
  `${s.charAt(0).toUpperCase()}${s.slice(1)}`;

const myList = List.of(
  Map.of('first', 'joe', 'last', 'brown', 'age', 45),
  Map.of('first', 'john', 'last', 'smith', 'age', 32),
  Map.of('first', 'mary', 'last', 'wise', 'age', 56)
);

// Maps the list of maps to a list of strings. Instead of
// doing everything in a single map() call, we create
// three specialized map() calls that do one specific thing.
// Since this is a sequence, splitting up map() calls has
// no impact on performance.
myList
  .toSeq()
  .map(v => v.update('first', capitalize))
  .map(v => v.update('last', capitalize))
  .map(v => [v.get('first'), v.get('last')].join(' '))
  .forEach(v => console.log('name', v));
  // -> name Joe Brown
  // -> name John Smith
  // -> name Mary Wise
