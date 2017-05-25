import { is, List, Map } from 'immutable';

const myList = List.of(1, 2);
const myMap = Map.of('one', 1);

// The is() function is fundamental to comparing Immutable.js
// structures to other Immutable.js structures. Items are compared
// deeply, and since the data is Immutable, these comparisons
// can be extremely efficient.
console.log('myList', myList.toJS());
// -> myList [ 1, 2 ]
console.log('is([1, 2])', is(myList, List.of(1, 2)));
// -> is([1, 2]) true
console.log('equals([1, 2])', myList.equals(List.of(1, 2)));
// -> equals([1, 2]) true
console.log('is([1, 1])', is(myList, List.of(1, 1)));
// -> is([1, 1]) false
console.log('equals([1, 1])', myList.equals(List.of(1, 1)));
// -> equals([1, 1]) false
console.log('is([2, 1])', is(myList, List.of(2, 1)));
// -> is([2, 1]) false
console.log('equals([2, 1])', myList.equals(List.of(2, 1)));
// -> equals([2, 1]) false

console.log('myMap', myMap.toJS());
// -> myMap { one: 1 }
console.log('is({ one: 1 })', is(myMap, Map.of('one', 1)));
// -> is({ one: 1 }) true
console.log('equals({ one: 1 })', myMap.equals(Map.of('one', 1)));
// -> equals({ one: 1 }) true
console.log('is({ two: 1 })', is(myMap, Map.of('two', 1)));
// -> is({ two: 1 }) false
console.log('equals({ two: 1 })', myMap.equals(Map.of('two', 1)));
// -> equals({ two: 1 }) false
console.log('is({ one: 2 })', is(myMap, Map.of('one', 2)));
// -> is({ one: 2 }) false
console.log('equals({ one: 1 })', myMap.equals(Map.of('one', 2)));
// -> equals({ one: 1 }) false
