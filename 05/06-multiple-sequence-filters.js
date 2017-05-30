import { List } from 'immutable';

// Equality predicate builder. Includes output
// of comparisons as they're made so we can see
// them relative to the output.
const equals = first => (second) => {
  console.log(`${first} === ${second}`);
  return first === second;
};

const myList = List.of(1, 2, 3, 4, 5, 6);

// It's easy to assemble complex filtering logic,
// without having to create intermediary representations.
// The filters are executed one at a time, in order,
// for each item in the collection.
myList
  .toSeq()
  .filterNot(equals(1))
  .filterNot(equals(3))
  .filterNot(equals(5))
  .forEach(item => console.log('myList', item));
  // -> 1 === 1
  // -> 1 === 2
  // -> 3 === 2
  // -> 5 === 2
  // -> myList 2
  // -> 1 === 3
  // -> 3 === 3
  // -> 1 === 4
  // -> 3 === 4
  // -> 5 === 4
  // -> myList 4
  // -> 1 === 5
  // -> 3 === 5
  // -> 5 === 5
  // -> 1 === 6
  // -> 3 === 6
  // -> 5 === 6
  // -> myList 6
