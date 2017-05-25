import { List } from 'immutable';

const myList = List.of('apples', 'bananas', 'cherries', 'chocolate');

// A search predicate that looks for items that start
// with "ch".
const predicate = s => s.startsWith('ch');

// Finding a single item in an ordered list starting from
// right to left.
const myFoundItem = myList.findLast(predicate);

// Filtering out a list of items from right to
// left is a little trickier since we want to preserve
// the left to right ordering in the result.
const myFilteredList = myList.reduceRight(
  (result, v) => predicate(v) ?
    result.unshift(v) : result,
  List()
);

console.log('myList', myList.toJS());
// -> myList [ 'apples', 'bananas', 'cherries', 'chocolate' ]
console.log('myFoundItem', myFoundItem);
// -> myFoundItem chocolate
console.log('myFilteredList', myFilteredList.toJS());
// -> myFilteredList [ 'cherries', 'chocolate' ]
