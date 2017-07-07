const fs = require('fs');
const os = require('os');
const { List } = require('immutable');

let myWordList = List();
let last = '';

console.time('elapsed');
const wordInput = fs.createReadStream('./input/words');

wordInput.on('data', (data) => {
  const words = `${last}${data.toString()}`.split(os.EOL);
  last = words[words.length - 1];

  for (const word of words) {
    myWordList = myWordList.push(word);
  }
});

wordInput.on('end', () => {
  console.log('word count', myWordList.count().toLocaleString());
  console.timeEnd('elapsed');
  // -> word count 235,886
  // -> elapsed: 959.299ms
});
