console.log('threeSumFast:')
/* input start */
var Generator = require('../../../generator/index');
var input = Generator.getEscRandomNumbers(1E4, -100, 100);
input = Generator.noRepeat(input);
/* input end */
console.log('> input: ' + input);


// threeSumFast
function threeSumFast(input) {
  var counter = 0;
  for(var i = 0, len = input.length; i < len - 2; i++) {
    for(var j = i; j < len - 1; j++) {
      var searchKey = -1 * (input[i] + input[j]);
      if(rank(input, searchKey) > -1) {
        counter++;
      }
    }
  }
  return counter;

  function rank(a, k){
    var start = 0;
    var end = a.length - 1;
    while(start <= end) {
      var mid = Math.floor((end - start) / 2) + start;
      if(k < a[mid]) {
        end = mid - 1;
      } else if(k > a[mid]) {
        start = mid + 1;
      } else {
        return mid;
      }
    }
    return -1;
  }
}


/* output start */
console.log('> output: ' + threeSumFast(input));
/* output end */
