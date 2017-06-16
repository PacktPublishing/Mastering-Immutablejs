import { OrderedSet, Map } from 'immutable';

// Prints the values of a set. The last property holds
// the last set that was passed to this function. Since
// adding a duplicate will always return a new set, even
// though nothing changed, we have to use the more expensive
// is() function to test for equality.
const printValues = (set) => {
  if (!set.equals(printValues.prev)) {
    printValues.prev = set;
    set
      .valueSeq()
      .map(v => v.toJS())
      .forEach(v => console.log(v));
  }
};

const myOrderedSet = OrderedSet.of(
  Map.of('one', 1),
  Map.of('two', 2)
);

console.log('myOrderedSet');
printValues(myOrderedSet);
// -> myOrderedSet
// -> { one: 1 }
// -> { two: 2 }

console.log('adding 3');
printValues(myOrderedSet.add(Map.of('three', 3)));
// -> adding 3
// -> { one: 1 }
// -> { two: 2 }
// -> { three: 3 }

console.log('adding 3 again');
printValues(myOrderedSet.add(Map.of('three', 3)));
// -> adding 3 again
