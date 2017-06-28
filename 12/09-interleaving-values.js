import { List } from 'immutable';

const myList1 = List.of(1, 2, 3);
const myList2 = List.of(4, 5, 6);
const myList3 = List.of(7, 8, 9);

console.log('found', myList1
  .toSeq()
  .interleave(myList2, myList3)
  .find((v) => {
    console.log('checking', v);
    return v === 7;
  }));
  // -> checking 1
  // -> checking 4
  // -> checking 7
  // -> found 7
