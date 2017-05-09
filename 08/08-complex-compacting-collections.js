import { List, Map, is as _is } from 'immutable';

// Utility for composing a filter() callback function
// that compares coll to each item in the collection
// using Immutable.js is().
const is = coll => other => _is(coll, other);

const myList = List.of(
  Map.of('enabled', false, 'permission', true),
  Map.of('enabled', true, 'permission', true),
  Map.of('enabled', true, 'permission', false),
  Map.of('enabled', true, 'permission', true)
);

// We can remove compact the collection by filtering
// out maps that don't match the spec passed to
// is().
const count = myList
  .toSeq()
  .filter(is(Map.of('enabled', true, 'permission', true)))
  .count();

console.log('count', count);
// -> count 2
