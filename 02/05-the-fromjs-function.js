// We don't need to import specific immutable
// types. Just the function that knows how to
// deeply parse everything we need.
import { fromJS } from 'immutable';

// The fromJS() function knows how to parse simple
// JSON-like data into immutable data types.
const myList = fromJS([1, 2, 3]);
const myMap = fromJS({
  a: {
    b: ['c', 'd'],
    e: {
      f: 'g',
      h: 'i'
    }
  }
});

// As usual, we can use get to read list data.
console.log('myList', myList.get(0));
// -> myList 1

// We can also read inside of the nested immutable
// map to find what we nned.
console.log(
  'myMap nested list',
  myMap.getIn(['a', 'b']).toJS()
);
// -> myMap nested list [ 'c', 'd' ]

console.log('myMap nested value', myMap.getIn(['a', 'b', 1]));
// -> myMap nested value d
