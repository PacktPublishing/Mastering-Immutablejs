import { Map } from 'immutable';

const myBehavior = action => Map.of(
  'first', () => console.log('first'),
  'second', () => console.log('second'),
  'third', () => console.log('third')
).get(action)();

myBehavior('first');
// -> first
myBehavior('second');
// -> second
myBehavior();
// -> TypeError: Map.of(...).get(...) is not a function
