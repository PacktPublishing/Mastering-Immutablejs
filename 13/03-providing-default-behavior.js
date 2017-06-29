import { Map } from 'immutable';

const myBehavior = action => Map.of(
  true, () => console.log('thruth'),
  false, () => console.log('lies')
).get(
  action,
  () => console.log('default')
)();

myBehavior(true);
// -> truth
myBehavior(false);
// -> lies
myBehavior();
// -> default
myBehavior(123);
// -> default
