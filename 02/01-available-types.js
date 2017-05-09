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
console.log('Map', myMap instanceof Map);
console.log('OrderedMap', myOrderedMap instanceof OrderedMap);
console.log('Set', mySet instanceof Set);
console.log('OrderedSet', myOrderedSet instanceof OrderedSet);
console.log('Seq', mySeq instanceof Seq);
console.log('Stack', myStack instanceof Stack);
console.log('Record', myRecord instanceof Record);
