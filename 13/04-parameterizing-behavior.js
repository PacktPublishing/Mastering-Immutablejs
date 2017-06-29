import { Map } from 'immutable';

const log = value => console.log('log:', value);

const myBehavior = (action, ...args) => Map.of(
  'start', value => log(`starting ${value}...`),
  'stop', value => log(`stopping ${value}...`)
).get(
  action,
  () => {}
)(...args);

myBehavior('start', 'database');
// -> log: starting database...
myBehavior('start', 'server');
// -> log: starting server...
myBehavior('stop', 'database');
// -> log: stopping database...
myBehavior('stop', 'server');
// -> log: stopping server...
