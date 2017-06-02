import { List, Map } from 'immutable';

const myList = List.of(
  Map.of('red', 3, 'black', 4),
  Map.of('red', 6, 'black', 8),
  Map.of('red', 9, 'black', 12)
);

// We can call reduce() directly to produce the minimum
// and maximum values that we need. These are simple,
// but a little redundant. The only difference between
// the two is the operator.
const minRedReduce = myList.reduce(
  (result, v) => v.get('red') < result ?
    v.get('red') :
    result,
  myList.first().get('red')
);
const maxRedReduce = myList.reduce(
  (result, v) => v.get('red') > result ?
    v.get('red') :
    result,
  myList.first().get('red')
);

// Another approach is to map the list to
// all it's red values, then use the min() and
// the max() functions to get the correponding
// values.
const minRedMap = myList
  .map(v => v.get('red'))
  .min();
const maxRedMap = myList
  .map(v => v.get('red'))
  .max();

// The minBy() and maxBy() functions combine the
// map and reduce into one step. However, since this results
// in the full object, we have to call get() if we only
// want the number.
const minByRed = myList
  .minBy(v => v.get('red'))
  .get('red');
const maxByRed = myList
  .maxBy(v => v.get('red'))
  .get('red');

console.log('minRedReduce', minRedReduce);
// -> minRedReduce 3
console.log('maxRedReduce', maxRedReduce);
// -> maxRedReduce 9
console.log('minRedMap', minRedMap);
// -> minRedMap 3
console.log('maxRedMap', maxRedMap);
// -> maxRedMap 9
console.log('minByRed', minByRed);
// -> minByRed 3
console.log('maxByRed', maxByRed);
// -> maxByRed 9
