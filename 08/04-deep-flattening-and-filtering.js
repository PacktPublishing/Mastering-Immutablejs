import { List } from 'immutable';

const myList = List(
  List.of(
    List.of(1, 2),
    List.of(3, 4),
    List.of(
      List.of(5, 6),
      List.of(
        List.of(7, 8),
        List.of(9, 10),
        List.of(
          List.of(11, 12),
          List.of(13, 14),
          List.of(
            List.of(15, 16),
            List.of(17, 18),
            List.of(
              List.of(19, 20)
            )
          )
        )
      )
    )
  )
);

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
