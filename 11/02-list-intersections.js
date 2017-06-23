import { List, Seq, Set } from 'immutable';

// Intersects the given lists, resulting in a new
// list. The idea is to reduce the first list to
// a new list that includes values that exist
// in every other list.
const intersect = (...lists) => {
  const [head] = lists;
  const tail = Seq(lists.slice(1));

  return head.reduce((result, value) =>
    tail
      .map(list => list.includes(value))
      .includes(false) ?
        result : result.add(value),
    Set()
  );
};

const myList1 = List.of(1, 2, 3, 2);
const myList2 = List.of(2, 3, 4);
const myList3 = List.of(2, 3, 5);

const myIntersection = intersect(
  myList1,
  myList2,
  myList3
);

console.log('myList1', myList1.toJS());
// -> myList1 [ 1, 2, 3, 2 ]
console.log('myList2', myList2.toJS());
// -> myList2 [ 2, 3, 4 ]
console.log('myList3', myList3.toJS());
// -> myList3 [ 2, 3, 5 ]
console.log('myIntersection', myIntersection.toJS());
// -> myIntersection [ 2, 3 ]
