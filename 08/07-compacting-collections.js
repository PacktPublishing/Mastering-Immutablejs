import { List, Map } from 'immutable';

const myList = List.of(
  Map.of('name', 'Justin', 'enabled', false),
  Map.of('name', 'Ashley', 'enabled', true),
  Map.of('name', 'Brian', 'enabled', true)
);

myList
  .toSeq()
  .filter(v => v.get('enabled'))
  .map(v => v.get('name'))
  .forEach(n => console.log('name', n));
  // -> name Ashley
  // -> name Brian
