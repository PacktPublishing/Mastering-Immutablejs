import { List, Stack } from 'immutable';

// Names of List and Map methods that perform
// persistent changes. These are the methods that
// we want to build history from.
const persistentChanges = [
  'set',
  'delete',
  'deleteAll',
  'clear',
  'update',
  'merge',
  'mergeWith',
  'mergeDeep',
  'mergeDeepWith',
  'setIn',
  'deleteIn',
  'updateIn',
  'mergeIn',
  'mergeDeepIn',
  'insert',
  'push',
  'pop',
  'unshift',
  'shift',
  'setSize'
];

// Where the history for a given collection is stored.
const mutations = new WeakMap();

// Defines proxy behavior for collection instances.
// It's a way to trap method calls and redirect them
// to instances in the mutations map.
const historyHandler = {
  get(target, key) {
    // Before we do anything, make sure that the
    // target collection has a Stack instance in
    // the mutations map.
    if (!mutations.has(target)) {
      mutations.set(
        target,
        Stack().unshift(target)
      );
    }

    // Get the mutation history for this collection.
    const stack = mutations.get(target);

    // Check if the caller is calling one of the
    // recognized persistent change methods.
    if (persistentChanges.includes(key)) {
      // Return a function that calls the method in question
      // on the most recent stack item.
      return (...args) => {
        const result = stack.first()[key](...args);

        // Store the result as the newest item on the stack.
        mutations.set(
          target,
          stack.unshift(result)
        );

        // Return the result like normal.
        return result;
      };

    // The caller is calling the undo() method. Remove the
    // first item on the stack, if there's more than
    // one item.
    } else if (key === 'undo') {
      return () =>
        mutations.set(
          target,
          stack.count() > 1 ? stack.shift() : stack
        );
    }
    // Not a persistent change method, just call it and
    // return the result.
    return stack.first()[key];
  }
};

// Wraps a List instance with the historyHandler proxy.
const myList = new Proxy(List.of(1, 2, 3), historyHandler);
console.log('myList', myList.toJS());
// -> myList [ 1, 2, 3 ]

myList.push(4);
console.log('push(4)', myList.toJS());
// -> push(4) [ 1, 2, 3, 4 ]
myList.delete(0);
console.log('delete(0)', myList.toJS());
// -> delete(0) [ 2, 3, 4 ]
myList.undo();
console.log('undo()', myList.toJS());
// -> undo() [ 1, 2, 3, 4 ]
myList.undo();
console.log('undo()', myList.toJS());
// -> undo() [ 1, 2, 3 ]
