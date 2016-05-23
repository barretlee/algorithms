var baseGenerator = require('./index');

var randomNumbers = baseGenerator.getRandomStrings();

console.log(baseGenerator.noRepeat(randomNumbers));
