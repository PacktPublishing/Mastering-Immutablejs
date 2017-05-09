import { List, Map, is } from 'immutable';

const myList = List.of(
  Map.of('one', 1, 'two', 2),
  Map.of('three', 3, 'four', 4),
  Map.of('five', 5, 'six', 6)
);

// Transformation methods, like map(), never return the
// same instance. Even in this case, where we're returning
// the exact same map.
const myTransformedList = myList.map(v => v);

// Mutative methods, like update() and set(), will return
// the same instance if nothing changes, as is the case here.
const myMutatedList = myList
  .update(0, v => v.set('one', 1));

console.log('myList', myList.toJS());
// -> myList [ { one: 1, two: 2 },
// ->          { three: 3, four: 4 },
// ->          { five: 5, six: 6 } ]
console.log('myTransformedList', myTransformedList.toJS());
// -> myTransformedList [ { one: 1, two: 2 },
// ->                     { three: 3, four: 4 },
// ->                     { five: 5, six: 6 } ]
console.log('myMutatedList', myMutatedList.toJS());
// -> myMutatedList [ { one: 1, two: 2 },
// ->                 { three: 3, four: 4 },
// ->                 { five: 5, six: 6 } ]
console.log('myList === myTransformedList', myList === myTransformedList);
// -> myList === myTransformedList false
console.log('myList === myMutatedList', myList === myMutatedList);
// -> myList === myMutatedList true
console.log('is(myList, myTransformedList)', is(myList, myTransformedList));
// -> is(myList, myTransformedList) true
console.log('is(myList, myMutatedList)', is(myList, myMutatedList));
// -> is(myList, myMutatedList) true
