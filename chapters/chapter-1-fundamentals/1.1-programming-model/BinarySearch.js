console.log("BinarySearch:")
/* input start */
var Generator = require('../../../generator/index');
var input = Generator.getEscRandomNumbers(10);
var index = Generator.getRandomNumber(0, input.length - 1);
var key = input[index];
/* input end */
console.log("> input: " + input + " (index: " + index + ", key: " + key + ")");


// BinarySearch
function BinarySearch(input, key) {

  return indexOf(input, key);

  function indexOf(a, k) {
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
};


/* output start */
console.log("> output: " + BinarySearch(input, key));
/* output end */
