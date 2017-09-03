import { Set } from 'immutable';

const myFirstSet = Set.of(1, 2, 3, 4, 5, 6);
const mySecondSet = Set.of(2, 4, 6, 8, 10);

// Create a new set by intersecting with another.
const myIntersection = myFirstSet.intersect(mySecondSet);

// The resulting set intersection will always
// be in the correct order since we're converting
// it to an ordered set before intersecting.
const myOrderedIntersection = myFirstSet
  .sort()
  .intersect(mySecondSet);

console.log('myFirstSet', myFirstSet.toJS());
// -> myFirstSet [ 1, 2, 3, 4, 5, 6 ]
console.log('mySecondSet', mySecondSet.toJS());
// -> mySecondSet [ 2, 4, 6, 8, 10 ]
console.log('myIntersection', myIntersection.toJS());
// -> myIntersection [ 6, 2, 4 ]
console.log('myOrderedIntersection', myOrderedIntersection.toJS());
// -> myOrderedIntersection [ 2, 4, 6 ]
