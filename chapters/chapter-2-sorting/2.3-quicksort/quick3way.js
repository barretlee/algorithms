console.log('quick3way:')
/* input start */
var input = require('../../../generator/index').getRandomNumbers(30, 0, 15);
/* input end */
console.log('> input: ' + input);


// quick3way
function quick3way(input) {
  sort(0, input.length - 1);
  return input;

  function sort(start, end) {
    if(start >= end) return;

    var lt = start, gt = end, i = start + 1, v = input[start];
    while(i <= gt) {
      if(input[i] < v) {
        input[lt] = [input[i], input[i] = input[lt]][0];
        lt++; i++;
      } else if(input[i] > v) {
        input[gt] = [input[i], input[i] = input[gt]][0];
        gt--;
      } else {
        i++;
      }
    }
    sort(start, lt - 1);
    sort(gt + 1, end);
  }
}


/* output start */
console.log('> output: ' + quick3way(input));
/* output end */
