import { Map } from 'immutable';

const behavior = (behaviors, defaultBehavior = () => {}) =>
  (action, ...args) =>
    behaviors.get(action, defaultBehavior)(...args);

const greaterThanFive = behavior(Map.of(
  true, n => `${n} is greater than 5`,
  false, n => `${n} is less than 5`
));

const lessThanTen = behavior(Map.of(
  true, n => `${n} is less than 10`,
  false, n => `${n} is greater than 10`
));

const a = 6;
const b = 1;
const c = 12;

console.log(greaterThanFive(a > 5, a));
// -> 6 is greater than 5
console.log(lessThanTen(a < 10, a));
// -> 6 is less than 10
console.log(greaterThanFive(b > 5, b));
// -> 1 is less than 5
console.log(lessThanTen(c < 10, c));
// -> 12 is greater than 10
