console.log('quicksort:')
/* input start */
var input = require('../../../generator/index').getRandomNumbers(40);
/* input end */
console.log('> input: ' + input);


// quicksort
var delta = 5;
function quicksort(input) {

  sort(0, input.length - 1);
  return input;

  function sort(start, end) {
    if(start + delta >= end) {
      insertion(start, end);
      return;
    }
    var mid = partition(start, end);
    sort(start, mid - 1);
    sort(mid + 1, end);
  }

  function partition(start, end) {
    var i = start, j = end + 1, k = input[start];
    while(true) {
      while(input[++i] < k) if( i === end) break;
      while(input[--j] > k) if( j === start) break;
      if(i >= j) break;
      input[i] = [input[j], input[j] = input[i]][0];
    }
    input[j] = [input[start], input[start] = input[j]][0];
    return j;
  }

  function insertion(start, end) {
    for(var i = start + 1, len = end - start; i < end; i++) {
      for(var j = i; j > start; j--) {
        if(input[j] < input[j - 1]) {
          input[j] = [input[j - 1], input[j - 1] = input[j]][0];
        }
      }
    }
  }
}


/* output start */
console.log('> output: ' + quicksort(input));
/* output end */
