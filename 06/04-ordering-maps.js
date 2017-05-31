import { Map, OrderedMap } from 'immutable';

// Maps generally maintain the set() order, but this
// isn't guaranteed during iteration.
const myMap = Map()
  .set('one', 1)
  .set('two', 2)
  .set('three', 3);

myMap
  .forEach(i => console.log('myMap', i));
  // -> myMap 1
  // -> myMap 2
  // -> myMap 3

// Ordered maps enforce set() order, including the
// iteration order of items.
const myOrderedMap = OrderedMap()
  .set('three', 3)
  .set('two', 2)
  .set('one', 1);

myOrderedMap
  .forEach(i => console.log('myOrderedMap', i));
  // -> myOrderedMap 3
  // -> myOrderedMap 2
  // -> myOrderedMap 1
