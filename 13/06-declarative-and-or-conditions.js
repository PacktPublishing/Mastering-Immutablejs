import { Map, Seq } from 'immutable';

const behavior = (behaviors, defaultBehavior = () => {}) =>
  (action, ...args) =>
    behaviors.get(action, defaultBehavior)(...args);

const some = (...predicates) => {
  const predicateSeq = Seq(predicates);
  return (...args) => predicateSeq.some(p => p(...args));
};

const every = (...predicates) => {
  const predicateSeq = Seq(predicates);
  return (...args) => predicateSeq.every(p => p(...args));
};

const hasEnough = some(
  v => v.get('source1') > 5,
  v => v.get('source2') > 5,
  v => v.get('source3') > 5
);

const hasEverything = every(
  v => v.get('enabled'),
  v => v.get('hasPermission'),
  v => v.get('oldEnough')
);

const hasBoth = every(
  hasEnough,
  hasEverything
);

const logHasEnough = behavior(Map.of(
  true, () => console.log('yep, has enough'),
  false, () => console.log('sorry, not enough')
));

const logHasEverything = behavior(Map.of(
  true, () => console.log('yep, has everything'),
  false, () => console.log('sorry, not everything')
));

const logHasBoth = behavior(Map.of(
  true, () => console.log('yep, it has all of it'),
  false, () => console.log('nope')
));

const myMap1 = Map.of(
  'source1', 5,
  'source2', 6,
  'source3', 7
);
const myMap2 = Map.of(
  'source1', 6
);
const myMap3 = Map.of(
  'source1', 1,
  'source2', 2,
  'source3', 3
);
const myMap4 = Map.of(
  'enabled', true,
  'hasPermission', true,
  'oldEnough', true
);
const myMap5 = Map.of(
  'enabled', true,
  'hasPermission', true
);
const myMap6 = myMap1.merge(myMap4);
const myMap7 = myMap1.merge(myMap5);

console.log('myMap1', myMap1.toJS());
logHasEnough(hasEnough(myMap1));
// -> myMap1 { source1: 5, source2: 6, source3: 7 }
// -> yep, has enough
console.log('myMap2', myMap2.toJS());
logHasEnough(hasEnough(myMap2));
// -> myMap2 { source1: 6 }
// -> yep, has enough
console.log('myMap3', myMap3.toJS());
logHasEnough(hasEnough(myMap3));
// -> myMap3 { source1: 1, source2: 2, source3: 3 }
// -> sorry, not enough
console.log('myMap4', myMap4.toJS());
logHasEverything(hasEverything(myMap4));
// -> myMap4 { enabled: true, hasPermission: true, oldEnough: true }
// -> yep, has everything
console.log('myMap5', myMap5.toJS());
logHasEverything(hasEverything(myMap5));
// -> myMap5 { enabled: true, hasPermission: true }
// -> sorry, not everything
console.log('myMap6', myMap6.toJS());
logHasBoth(hasBoth(myMap6));
// -> myMap6 { source1: 5, source2: 6,
// ->          source3: 7, enabled: true,
// ->          hasPermission: true, oldEnough: true }
// -> yep, it has all of it
console.log('myMap7', myMap7.toJS());
logHasBoth(hasBoth(myMap7));
// -> myMap6 { source1: 5, source2: 6,
// ->          source3: 7, enabled: true,
// ->          hasPermission: true }
// -> nope
