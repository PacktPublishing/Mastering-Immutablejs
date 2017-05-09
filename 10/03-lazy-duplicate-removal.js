import { List, Map } from 'immutable';

const myList = List.of(
  Map.of('one', 1, 'two', 2),
  Map.of('three', 3, 'four', 4),
  Map.of('one', 1, 'two', 2),
  Map.of('five', 5, 'six', 6),
  Map.of('one', 1, 'two', 2)
);

// This doesn't work, because there's no way to lazy
// evaluate duplicates out of a list.
myList
  .toSetSeq()
  .map(v => v.toJS())
  .forEach(v => console.log('toSetSeq()', v));
  // -> toSetSeq() { one: 1, two: 2 }
  // -> toSetSeq() { three: 3, four: 4 }
  // -> toSetSeq() { one: 1, two: 2 }
  // -> toSetSeq() { five: 5, six: 6 }
  // -> toSetSeq() { one: 1, two: 2 }


// This works as expected, no more duplicates.
myList
  .toSet()
  .map(v => v.toJS())
  .forEach(v => console.log('toSet()', v));
  // -> toSet() { one: 1, two: 2 }
  // -> toSet() { three: 3, four: 4 }
  // -> toSet() { five: 5, six: 6 }
