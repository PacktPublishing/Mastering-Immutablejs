import { List, Map } from 'immutable';

// Takes an arbitrary number of lists, and finds the
// difference between them.
const difference = (...lists) =>
  List()
    .concat(...lists)
    .countBy(v => v)
    .toSeq()
    .filter(v => v < lists.length)
    .keySeq();

// Works just like difference(), except it uses a different
// filter().
const intersection = (...lists) =>
  List()
    .concat(...lists)
    .countBy(v => v)
    .toSeq()
    .filter(v => v === lists.length)
    .keySeq();

const myList1 = List.of(
  Map.of('first', 1, 'second', 2),
  Map.of('third', 3, 'fourth', 4)
);

const myList2 = List.of(
  Map.of('third', 3, 'fourth', 4),
  Map.of('fifth', 5, 'sixth', 6)
);

const myList3 = List.of(
  Map.of('first', 1, 'second', 2),
  Map.of('third', 3, 'fourth', 4),
  Map.of('seventh', 7, 'eighth', 8)
);

console.log('myList1', myList1.toJS());
// -> myList1 [ { first: 1, second: 2 }, { third: 3, fourth: 4 } ]
console.log('myList2', myList2.toJS());
// -> myList2 [ { third: 3, fourth: 4 }, { fifth: 5, sixth: 6 } ]
console.log('myList3', myList3.toJS());
// -> myList3 [ { first: 1, second: 2 },
// ->           { third: 3, fourth: 4 },
// ->           { seventh: 7, eighth: 8 } ]

difference(myList1, myList2, myList3)
  .forEach((v) => {
    console.log('first diff', v.toJS());
  });
  // -> first diff { first: 1, second: 2 }
  // -> first diff { fifth: 5, sixth: 6 }
  // -> first diff { seventh: 7, eighth: 8 }

difference(myList3, myList1, myList2)
  .forEach((v) => {
    console.log('second diff', v.toJS());
  });
  // -> second diff { first: 1, second: 2 }
  // -> second diff { seventh: 7, eighth: 8 }
  // -> second diff { fifth: 5, sixth: 6 }

intersection(myList1, myList2, myList3)
  .forEach((v) => {
    console.log('intersection', v.toJS());
  });
  // -> intersection { third: 3, fourth: 4 }
