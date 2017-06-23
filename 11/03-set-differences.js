import { Set } from 'immutable';

const mySet1 = Set.of('first', 'second', 'third');
const mySet2 = Set.of('first', 'second');

// You're taking whatever is in mySet2 out of
// mySet1. Since "third" isn't in mySet2, it's
// the difference.
const myDiff1 = mySet1.subtract(mySet2);

// Here, the order of the operation is changed, and
// there's nothing left over after subtracting mySet1
// from mySet2. This can be misleading since there's
// obviously a difference between the two lists.
const myDiff2 = mySet2.subtract(mySet1);

console.log('mySet1', mySet1.toJS());
// -> mySet1 [ 'first', 'second', 'third' ]
console.log('mySet2', mySet2.toJS());
// -> mySet2 [ 'first', 'second' ]
console.log('myDiff1', myDiff1.toJS());
// -> myDiff1 [ 'third' ]
console.log('myDiff2', myDiff2.toJS());
// -> myDiff2 []
