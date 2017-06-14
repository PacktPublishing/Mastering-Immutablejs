import { List } from 'immutable';

const myList = List.of(1, 2, 3);
const myModifiedList = myList.push(4);

// Transforms a list then iterates over it, logging
// values. After we transform it, we check to see
// if the result is the same as what we've
// stored in prev. If the equals() method returns
// true, then we can skip the side-effect.
const mySideEffect = (list) => {
  if (list !== mySideEffect.prev) {
    mySideEffect.prev = list;
    list
      .map(v => v * v)
      .forEach(v => console.log('transformed', v));
  }
};

console.log('first side-effect');
mySideEffect(myList);
// -> first side-effect
// -> transformed 1
// -> transformed 4
// -> transformed 9
console.log('second side-effect');
mySideEffect(myList.set(0, 1));
// -> second side-effect
console.log('third side-effect');
mySideEffect(myModifiedList);
// -> third side-effect
// -> transformed 1
// -> transformed 4
// -> transformed 9
// -> transformed 16
console.log('fourth side-effect');
mySideEffect(myModifiedList.set(0, 1));
// -> fourth side-effect
