const fs = require('fs');
const readline = require('readline');
const { List, Map } = require('immutable');

let myMapList = List();

const csvInput = readline.createInterface({
  input: fs.createReadStream('./input/01-data.csv')
});

csvInput.on('line', (line) => {
  myMapList = myMapList.push(
    Map.of(...line.split(','))
  );
});

csvInput.on('close', () => {
  console.log('myMapList', myMapList.toJS());
});
// -> myMapList [ { one: '1', two: '2', three: '3' },
// ->             { four: '4', five: '5', six: '6' },
// ->             { seven: '7', eight: '8', nine: '9' } ]
