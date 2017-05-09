import { List } from 'immutable';

const myList = List.of(
  List.of('first', 'second'),
  List.of('third', 'fourth', List.of('fifth')),
  List.of('sixth', 'seventh')
);

// Lists are recursed and flattened deeply by default.
// This could be a performance hit, and have unintended
// consequences. In this case, "fifth" is included even
// though we don't want it.
const myFlattenedList = myList.flatten();

// The true argument passed to flatten() tells it
// to stay shallow. This way, the list that wraps
// the "fifth" string isn't flattened, and it's
// easy to filter out.
const myShallowList = myList
  .flatten(true)
  .filterNot(List.isList);

console.log('myList', myList.toJS());
// -> myList [ [ 'first', 'second' ],
// ->          [ 'third', 'fourth', [ 'fifth' ] ],
// ->          [ 'sixth', 'seventh' ] ]

console.log('myFlattenedList', myFlattenedList.toJS());
// -> myFlattenedList [ 'first', 'second', 'third', 'fourth',
// ->                   'fifth', 'sixth', 'seventh' ]

console.log('myShallowList', myShallowList.toJS());
// -> myShallowList [ 'first', 'second', 'third', 'fourth',
// ->                 'sixth', 'seventh' ]
