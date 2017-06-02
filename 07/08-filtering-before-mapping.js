import { List, Map } from 'immutable';

// Capitalizes the first letter of a given string.
const capitalize = s =>
  `${s.charAt(0).toUpperCase()}${s.slice(1)}`;

const myList = List.of(
  Map.of('first', 'joe', 'last', 'brown', 'age', 45),
  Map.of('first', 'john', 'last', 'smith', 'age', 32),
  Map.of('first', 'mary', 'last', 'wise', 'age', 56)
);

// Lazily filtering and mapping. When an item is found,
// it is passed through each map() call before filtering
// is continued.
myList
  .toSeq()
  .filter(v => v.get('age') > 35)
  .map(v => v.update('first', capitalize))
  .map(v => v.update('last', capitalize))
  .map(v => [v.get('first'), v.get('last')].join(' '))
  .forEach(v => console.log('name', v));
  // -> name Joe Brown
  // -> name Mary Wise
