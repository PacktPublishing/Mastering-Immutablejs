import { List, Map } from 'immutable';

const names = List.of(
  Map.of('name', 'Jeremy'),
  Map.of('name', 'Garry'),
  Map.of('name', 'Katie')
);
const roles = List.of(
  Map.of('role', 'Engineer'),
  Map.of('role', 'Designer'),
  Map.of('role', 'Programmer')
);
const ages = List.of(
  Map.of('age', 34),
  Map.of('age', 23),
  Map.of('age', 36)
);

// Each item in the lists that we're zipping together
// is a map. This means that we can use zipWith() to
// merge the maps together as they're zipped.
names
  .zipWith(
    (...colls) => Map().merge(...colls),
    roles,
    ages
  )
  .forEach(v => console.log('employee', v.toJS()));
  // -> employee { name: 'Jeremy', role: 'Engineer', age: 34 }
  // -> employee { name: 'Garry', role: 'Designer', age: 23 }
  // -> employee { name: 'Katie', role: 'Programmer', age: 36 }
