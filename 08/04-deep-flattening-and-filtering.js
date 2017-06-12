import { fromJS } from 'immutable';

const myList = fromJS([
  [1, 2],
  [3, 4],
  [
    [5, 6],
    [
      [7, 8],
      [9, 10],
      [
        [11, 12],
        [13, 14],
        [
          [15, 16],
          [17, 18],
          [
            [19, 20]
          ]
        ]
      ]
    ]
  ]
]);

console.log('myList', myList.flatten().toJS());
// -> myList [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
// ->          11, 12, 13, 14, 15, 16, 17, 18,
// ->          19, 20 ]

// We're looking for odd numbers in a deeply-nested
// list of numbers. If we convert the list to a sequence,
// then flatten it, we can avoid recursion, and flatten
// the list lazily.
myList
  .toSeq()
  .flatten()
  .filter(v => v % 2)
  .take(5)
  .forEach(v => console.log('odd', v));
  // -> odd 1
  // -> odd 3
  // -> odd 5
  // -> odd 7
  // -> odd 9
