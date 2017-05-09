import { Range } from 'immutable';

// Filter to include even numbers
const predicate = i => i % 2 === 0;

// An infinite sequence of even numbers.
const myRange = Range().filter(predicate);

// Using slice() to create "pages" from our
// infinite number sequence.
const page1 = myRange.slice(0, 5);
const page2 = myRange.slice(5, 10);
const page3 = myRange.slice(10, 15);

// The slice() and the filter() calls aren't applied
// until we iterate over each page.
page1.forEach(i => console.log('page1', i));
// -> page1 0
// -> page1 2
// -> page1 4
// -> page1 6
// -> page1 8

page2.forEach(i => console.log('page2', i));
// -> page2 10
// -> page2 12
// -> page2 14
// -> page2 16
// -> page2 18

page3.forEach(i => console.log('page3', i));
// -> page3 20
// -> page3 22
// -> page3 24
// -> page3 26
// -> page3 28
