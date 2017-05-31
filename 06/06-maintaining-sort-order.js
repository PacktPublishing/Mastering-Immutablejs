import { List } from 'immutable';

// With a given item and a given list, we can
// figure out the insertion index that would
// maintain sort order of the list, then use
// the insert() method to insert the item in
// the correct order.
const sortedInsert = (item, list) => {
  let low = 0;
  let high = list.count();

  while (low < high) {
    const mid = (low + high) >>> 1;
    if (item > list.get(mid)) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return list.insert(low, item);
};

const myList = List.of(1, 3, 5);
const withTwo = sortedInsert(2, myList);
const withFour = sortedInsert(4, withTwo);
const usingSort = myList
  .push(2)
  .push(4)
  .sort();

console.log('myList', myList.toJS());
// -> myList [ 1, 3, 5 ]
console.log('withTwo', withTwo.toJS());
// -> withTwo [ 1, 2, 3, 5 ]
console.log('withFour', withFour.toJS());
// -> withFour [ 1, 2, 3, 4, 5 ]
console.log('usingSort', usingSort.toJS());
// -> usingSort [ 1, 2, 3, 4, 5 ]
