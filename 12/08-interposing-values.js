import { List } from 'immutable';

const myList = List.of(1, 2, 3, 4, 5, 6, 7, 8);

myList
  .toSeq()
  .filter((v) => {
    console.log('filtering', v);
    return v % 2;
  })
  .interpose('...')
  .forEach(v => console.log(v));
  // -> filtering 1
  // -> 1
  // -> filtering 2
  // -> filtering 3
  // -> ...
  // -> 3
  // -> filtering 4
  // -> filtering 5
  // -> ...
  // -> 5
  // -> filtering 6
  // -> filtering 7
  // -> ...
  // -> 7
  // -> filtering 8
