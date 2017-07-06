console.log('insertion:')
/* input start */
var input = require('../../../generator/index').getRandomNumbers();
/* input end */
console.log('> input: ' + input);


// insertion
function insertion(input) {
  for(var i = 1, len = input.length; i < len; i++) {
    var insertion = input[i];
    var j = i;
    while (j > 0 && insertion < input[j-1]) {
      input[j] = input[j-1];  
      j--;
    }
      input[j] = insertion;
  }
  return input;
}


/* output start */
console.log('> output: ' + insertion(input));
/* output end */
