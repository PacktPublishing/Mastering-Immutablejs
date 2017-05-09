import { List, Seq } from 'immutable';

// This is where cached argument values go. It's a WeakMap
// because the functions that implement side effects are
// the keys. When the function is garbage collected, we
// want it's cache garbage collected too.
const sideEffectCache = new WeakMap();

// Takes a function fn() and returns a new function that
// caches argument values. When the function is called
// again with the same argument values, nothing happens.
// The idea is that nothing needs to happen since the
// function implements side-effects.
const sideEffect = fn => (...args) => {
  // Does the function have cached arguments? If not,
  // we'll initialize to an empty array so that we can
  // still zip() it with the args array.
  const cache = sideEffectCache.get(fn)
    || new Array(args.length);

  // This is true if no cached argument values are found.
  // Since the expectation is that each argument is an
  // Immutable.js type, we know that we can do a strict
  // comparison. So unless every argument value passes
  // the some() test, we consider it a miss and call
  // the side-effect. We also update the cached args.
  const miss = Seq(args)
    .zip(cache)
    .some(([a, b]) => a !== b);

  if (miss) {
    sideEffectCache.set(fn, args);
    fn(...args);
  }
};

// We create side-effects by wrapping functions in sideEffect().
// Side effects are behavior that iterate over collections and
// perform IO.
const renderOddNumbers = sideEffect(
  coll => coll
    .toSeq()
    .filterNot(v => v % 2)
    .take(5)
    .forEach(v => console.log('odd', v))
);

// The same idea as renderOddNumbers(), except with two
// parameters and a different side-effect. You so if we
// get a cache hit, none of this code is executed - zip(),
// map(), take(), and forEach(). If you're dealing with
// a large collection, this is a big deal.
const renderMultiples = sideEffect(
  (a, b) => a
    .toSeq()
    .zip(b)
    .map(([v1, v2]) => v1 * v2)
    .take(5)
    .forEach(v => console.log('multiple', v))
);

const myFirstList = List.of(
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20
);

const mySecondList = List.of(
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40
);

// Renders as expected, also populates the cache
// for these two functions.
console.log('first render');
renderOddNumbers(myFirstList);
renderMultiples(myFirstList, mySecondList);
// -> first render
// -> odd 2
// -> odd 4
// -> odd 6
// -> odd 8
// -> odd 10
// -> multiple 21
// -> multiple 44
// -> multiple 69
// -> multiple 96
// -> multiple 125

// Looks like we're passing in different argument
// values here, but, since nothing is actually changed
// (index 0 is already 1), it's the same instance.
// This means that nothing is rendered, because it's
// already been rendered!
console.log('second render');
renderOddNumbers(myFirstList.set(0, 1));
renderMultiples(myFirstList, mySecondList.set(0, 21));
// -> second render

// This time we really are passing in different values.
// The cache for these two functions is invalidated, and,
// the side-effect is executed as expected.
console.log('third render');
renderOddNumbers(myFirstList.insert(0, -1));
renderMultiples(
  myFirstList,
  mySecondList.push(100)
);
// -> third render
// -> odd 2
// -> odd 4
// -> odd 6
// -> odd 8
// -> odd 10
// -> multiple 21
// -> multiple 44
// -> multiple 69
// -> multiple 96
// -> multiple 125
