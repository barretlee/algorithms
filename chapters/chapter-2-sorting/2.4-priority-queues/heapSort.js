console.log('heapSort:')
/* input start */
var Generator = require('../../../generator/index');
var Checker = require('../../../generator/checker');
var input = Generator.getRandomNumbers(20, 0, 1E2);
input = Generator.noRepeat(input);
input.unshift('');
/* input end */
console.log('> input:  ' + input);


// heapSort
function heapSort(input) {
  return sort(input);

  function sort (arr){
    var N = arr.length - 1;
    for(var k = N >> 2; k >= 1; k--) {
      arr = sink(arr, k, N);
    }
    while(N > 1) {
      arr[1] = [arr[N], arr[N] = arr[1]][0];
      N--;
      arr = sink(arr, 1, N);
    }
    return arr;
  }
  function sink(arr, k, N) {
    while(2 * k <= N) {
      var j = 2 * k;
      if(j < N && arr[j] < arr[j + 1]) j++;
      if(arr[k] >= arr[j]) break;
      arr[k] = [arr[j], arr[j] = arr[k]][0];
      k = j;
    }
    return arr;
  }
}


/* output start */
var output = heapSort(input);
console.log('> output: ' + output);
// console.log('> binary head check: ' + Checker.binaryHeadChecker(output));
/* output end */
