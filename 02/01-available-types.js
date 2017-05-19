import {
  List,
  Map,
  OrderedMap,
  Set,
  OrderedSet,
  Seq,
  Stack,
  Record
} from 'immutable';

// Returns new instances of immutable data types.
const myList = List();
const myMap = Map();
const myOrderedMap = OrderedMap();
const mySet = Set();
const myOrderedSet = OrderedSet();
const mySeq = Seq();
const myStack = Stack();

// The Record() function returns a new class,
// so we have to instantiate this ourselves.
const MyRecord = Record({});
const myRecord = new MyRecord();

console.log('List', myList instanceof List);
// -> List true
console.log('Map', myMap instanceof Map);
// -> Map true
console.log('OrderedMap', myOrderedMap instanceof OrderedMap);
// -> OrderedMap true
console.log('Set', mySet instanceof Set);
// -> Set true
console.log('OrderedSet', myOrderedSet instanceof OrderedSet);
// -> OrderedSet true
console.log('Seq', mySeq instanceof Seq);
// -> Seq true
console.log('Stack', myStack instanceof Stack);
// -> Stack true
console.log('Record', myRecord instanceof Record);
// -> Record true
