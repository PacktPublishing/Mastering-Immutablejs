const fs = require('fs');
const os = require('os');
const { List } = require('immutable');

let myWordList = List();
let last = '';

console.time('elapsed');
const wordInput = fs.createReadStream('./input/words');

wordInput.on('data', (data) => {
  const words = (last + data.toString()).split(os.EOL);
  last = words[words.length - 1];

  myWordList = myWordList.concat(words.slice(0, words.length - 1));
});

wordInput.on('end', () => {
  console.log('word count', myWordList.count().toLocaleString());
  console.timeEnd('elapsed');
  // -> word count 235,886
  // -> elapsed: 2012.116ms
});
