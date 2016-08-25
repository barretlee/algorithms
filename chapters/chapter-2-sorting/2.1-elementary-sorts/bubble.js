console.log('bubble:')
/* input start */
var input = require('../../../generator/index').getRandomNumbers();
/* input end */
console.log('> input: ' + input);


// bubble
function bubble(input) {
  for(var i = 0, len = input.length; i < len - 1; i++) {
    for(var j = 0; j < len - 1 - i; j++) {
      if(input[j] > input[j+1]) {
        input[j] = [input[j+1], input[j+1] = input[j]][0];
      }
    }
  }
  return input;
}


/* output start */
console.log('> output: ' + bubble(input));
/* output end */
