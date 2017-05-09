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

// When we call zipWith() on a sequence, the merges are
// performed lazily.
names
  .toSeq()
  .zipWith(
    (...maps) => Map().merge(...maps),
    roles,
    ages
  )
  .forEach(v => console.log('lazy zipWith', v.toJS()));
  // -> lazy zipWith { name: 'Jeremy', role: 'Engineer', age: 34 }
  // -> lazy zipWith { name: 'Garry', role: 'Designer', age: 23 }
  // -> lazy zipWith { name: 'Katie', role: 'Programmer', age: 36 }

// This works the same way as zipWith(), and everything
// is evaluated lazily as well. It's just a different
// approach to how the solution is structured.
names
  .toSeq()
  .zip(roles, ages)
  .map(maps => Map().merge(...maps))
  .forEach(v => console.log('lazy zip', v.toJS()));
  // -> lazy zip { name: 'Jeremy', role: 'Engineer', age: 34 }
  // -> lazy zip { name: 'Garry', role: 'Designer', age: 23 }
  // -> lazy zip { name: 'Katie', role: 'Programmer', age: 36 }
