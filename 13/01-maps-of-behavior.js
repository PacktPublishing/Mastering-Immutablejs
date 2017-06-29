import { Map } from 'immutable';

const actions = Map.of(
  'first', () => console.log('first'),
  'second', () => console.log('second'),
  'third', () => console.log('third')
);

actions.get('second')();
// -> second
actions.get('third')();
// -> third
