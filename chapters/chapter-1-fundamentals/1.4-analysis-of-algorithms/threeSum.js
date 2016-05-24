console.log('threeSum:')
/* input start */
var Generator = require('../../../generator/index');
var input = Generator.getRandomNumbers(1E2, -100, 100);
input = Generator.noRepeat(input);
/* input end */
console.log('> input: ' + input);


// threeSum
function threeSum(input) {
  var counter = 0;
  for(var i = 0, len = input.length; i < len - 2; i++) {
    for(var j = i + 1; j < len - 1; j++) {
      for(var k = j + 1; k < len; k++) {
        if(input[i] + input[j] + input[k] == 0)  {
          counter++;
        }
      }
    }
  }
  return counter;
}


/* output start */
console.log('> output: ' + threeSum(input));
/* output end */
