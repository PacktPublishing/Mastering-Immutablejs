const os = require('os');
const fs = require('fs');
const { Range } = require('immutable');

const myList = Range()
  .map(v => `Value${v}`)
  .take(20)
  .toList();
const output = fs.createWriteStream(
  './output/05-writing-collection-data'
);

output.on('close', () => {
  console.log('done');
});

myList.forEach((v) => {
  output.write(v + os.EOL);
});

output.end();
