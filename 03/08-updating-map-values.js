import { List, Map } from 'immutable';

const myList = List.of(
  Map.of('total', 0, 'step', 5),
  Map.of('total', 5, 'step', 10)
);

// A function that increments the total key based
// on the step key.
const increment = map => map.update(
  'total',
  t => t + map.get('step')
);

// By passing the increment() function to update(),
// we can change list items based on their current value.
const myChangedList = myList
  .update(0, increment)
  .update(1, increment);

console.log('myList', myList.toJS());
// -> myList [ { total: 0, step: 5 }, { total: 5, step: 10 } ]
console.log('myChangedList', myChangedList.toJS());
// -> myChangedList [ { total: 5, step: 5 }, { total: 15, step: 10 } ]
