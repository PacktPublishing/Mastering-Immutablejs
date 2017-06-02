import { List, Map } from 'immutable';

// Capitalizes the first letter of a given string.
const capitalize = s =>
  `${s.charAt(0).toUpperCase()}${s.slice(1)}`;

// Picks an array of of property values
// from a map.
const pick = (m, ...props) =>
  props.map(p => m.get(p));

const myList = List.of(
  Map.of('first', 'joe', 'last', 'brown', 'age', 45),
  Map.of('first', 'john', 'last', 'smith', 'age', 32),
  Map.of('first', 'mary', 'last', 'wise', 'age', 56)
);

console.log('myList', myList.toJS());
// -> myList [ { first: 'joe', last: 'brown', age: 45 },
// ->          { first: 'john', last: 'smith', age: 32 },
// ->          { first: 'mary', last: 'wise', age: 56 } ]

// Filter, map reduce, side-effects. This is a common
// pattern with immutable data. The best part is that
// any given step is optional,
myList
  .toSeq()
  .filter(v => v.get('age') < 50)
  .map(v => v.update('first', capitalize))
  .map(v => v.update('last', capitalize))
  .map(v => v.set('name', pick(v, 'first', 'last').join(' ')))
  .reduce(
    (result, v) => result
      .update('age', a => a + v.get('age'))
      .update('names', n => n.push(v.get('name'))),
    Map.of('names', List(), 'age', 0)
  )
  .forEach(
    (v, k) => console.log(k, List.isList(v) ? v.toJS() : v)
  );
  // -> names [ 'Joe Brown', 'John Smith' ]
  // -> age 77
