import { List } from 'immutable';

const names = List.of('Jeremy', 'Garry', 'Katie');
const roles = List.of('Engineer', 'Designer', 'Programmer');
const ages = List.of(34, 23, 36);

// Zips together the names, roles, and ages lists.
// The argument passed to map is an array of items
// with corresponding indexes from each list.
names
  .zip(roles, ages)
  .map(v => v.join(', '))
  .forEach(v => console.log('employee', v));
  // -> employee Jeremy, Engineer, 34
  // -> employee Garry, Designer, 23
  // -> employee Katie, Programmer, 36
