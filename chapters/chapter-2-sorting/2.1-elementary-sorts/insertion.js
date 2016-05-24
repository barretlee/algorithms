console.log('insertion:')
/* input start */
var input = require('../../../generator/index').getRandomNumbers();
/* input end */
console.log('> input: ' + input);


// insertion
function insertion(input) {
  for(var i = 1, len = input.length; i < len; i++) {
    for(var j = i; j > 0; j--) {
      if(input[j] < input[j - 1]) {
        input[j] = [input[j - 1], input[j - 1] = input[j]][0];
      }
    }
  }
  return input;
}


/* output start */
console.log('> output: ' + insertion(input));
/* output end */
