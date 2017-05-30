import { Range } from 'immutable';

// Filter to include odd numbers
const predicate = i => i % 2;

// An infinate range sequence.
const myRange = Range();

// The resulting forEach() iteratee will always
// be called 5 times, since take() is applied
// after filter().
myRange
  .filter(predicate)
  .take(5)
  .forEach((item) => {
    console.log('myRange (filter then take)', item);
  });
  // -> myRange (filter then take) 1
  // -> myRange (filter then take) 3
  // -> myRange (filter then take) 5
  // -> myRange (filter then take) 7
  // -> myRange (filter then take) 9

// 5 items are taken from the sequence before
// the filter() is applied. This means that the
// forEach() iteratee could be called fewer than
// 5 times.
myRange
  .take(5)
  .filter(predicate)
  .forEach((item) => {
    console.log('myRange (take then filter)', item);
  });
  // -> myRange (take then filter) 1
  // -> myRange (take then filter) 3
