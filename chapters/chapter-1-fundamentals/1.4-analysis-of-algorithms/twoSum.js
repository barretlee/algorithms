console.log('twoSum:')
/* input start */
var Generator = require('../../../generator/index');
var input = Generator.getRandomNumbers(1E4, -10, 10);
input = Generator.noRepeat(input);
/* input end */
console.log('> input: ' + input);


// twoSum
function twoSum(input) {
  var counter = 0;
  for(var i = 0, len = input.length; i < len - 1; i++) {
    for(var j = i + 1; j < len; j++) {
      if(input[i] + input[j] == 0)  {
        counter++;
      }
    }
  }
  return counter;
}


/* output start */
console.log('> output: ' + twoSum(input));
/* output end */
