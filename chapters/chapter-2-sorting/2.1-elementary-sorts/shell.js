console.log('shell:')
/* input start */
var input = require('../../../generator/index').getRandomNumbers();
/* input end */
console.log('> input: ' + input);


// shell
function shell(input) {
  var h = 1;
  var len = input.length;
  while(h < Math.floor(len / 3)) {
    h = h * 3 + 1;
  }
  while(h >= 1) {
    for(var i = h; i < len; i++)  {
      for(var j = i; j >= h; j -= h) {
        if(input[j] < input[j - h]) {
          input[j] = [input[j - h], input[j - h] = input[j]][0];
        }
      }
    }
    h = Math.floor(h / 3);
  }
  return input;
}


/* output start */
console.log('> output: ' + shell(input));
/* output end */
