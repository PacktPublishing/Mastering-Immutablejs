import { List, Map, Set, Repeat } from 'immutable';

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
  .toSeq()
  .map(v => v.toJS())
  .forEach(v => console.log('toSet()', v));
  // -> toSet() { one: 1, two: 2 }
  // -> toSet() { three: 3, four: 4 }
  // -> toSet() { five: 5, six: 6 }

// We can lazily remove duplicates from lists
// by keeping track of the values that have
// already made it through. If we see it
// again, we can ignore it.
const lazySet = (list) => {
  let seen = Set();

  return list
    .toSeq()
    .filter((v) => {
      if (seen.includes(v)) {
        return false;
      }

      seen = seen.add(v);
      return true;
    });
};

const myBigList = myList.concat(
  Repeat(Map.of('one', 1, 'two', 2), 10000)
);

console.log('myBigList.size', myBigList.size);
// -> myBigList.size 10005
lazySet(myBigList)
  .map(v => v.toJS())
  .take(2)
  .forEach(v => console.log('lazySet()', v));
  // -> lazySet() { one: 1, two: 2 }
  // -> lazySet() { three: 3, four: 4 }
