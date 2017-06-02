import { List, Map } from 'immutable';

const myList = List.of(
  Map.of('red', 3, 'black', 4),
  Map.of('red', 6, 'black', 8),
  Map.of('red', 9, 'black', 12)
);

// Reducing a list of maps to accumulate a specific
// property is reasy. It can also be repetitive and
// ineficient if we need more than one property.
const redSum = myList.reduce(
  (result, v) => result + v.get('red'),
  0
);
const blackSum = myList.reduce(
  (result, v) => result + v.get('black'),
  0
);

// This approach reduces the list of maps to a single map,
// instead of a single number. This avoids iterating the
// entire list more than once.
const groupedSums = myList
  .reduce((result, v) => result
    .update('red', r => r + v.get('red'))
    .update('black', b => b + v.get('black'))
  );

console.log('myList', myList.toJS());
// -> myList [ { red: 3, black: 4 },
// ->          { red: 6, black: 8 },
// ->          { red: 9, black: 12 } ]

console.log('redSum', redSum);
// -> redSum 18

console.log('blackSum', blackSum);
// -> blackSum 24

console.log('groupedSums.red', groupedSums.get('red'));
// -> groupedSums.red 18

console.log('groupedSums.black', groupedSums.get('black'));
// -> groupedSums.black 24
