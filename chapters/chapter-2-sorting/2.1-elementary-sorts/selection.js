console.log('selection:')
/* input start */
var input = require('../../../generator/index').getRandomNumbers();
/* input end */
console.log('> input: ' + input);


// selection
function selection(input) {
  for(var i = 0, len = input.length; i < len - 1; i++) {
    var min = i;
    for(var j = i + 1; j < len; j++) {
      if(input[j] < input[min]) {
        min = j;
      }
    }
    input[i] = [input[min], input[min] = input[i]][0];
  }
  return input;
}


/* output start */
console.log('> output: ' + selection(input));
/* output end */
