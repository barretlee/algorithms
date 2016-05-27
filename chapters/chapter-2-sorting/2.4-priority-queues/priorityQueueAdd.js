console.log('priorityQueueAdd:')
/* input start */
var Generator = require('../../../generator/index');
var input = Generator.getEscRandomNumbers(16, 1, 1E2);
input = Generator.noRepeat(input);
/* input end */
console.log('> input: ' + input);


// priorityQueueAdd
function priorityQueueAdd(input) {
  var output = [];

  output[1] = input[0];
  for(var i = 1, len = input.length; i < len; i++) {
    output = swim(output, input[i]);
  }

  return output;

  function swim(arr, val) {
    arr.push(val);
    var k = arr.length - 1;
    while(k > 1 && arr[k >> 1] < arr[k]) {
      var p = k >> 1;
      arr[p] = [arr[k], arr[k] = arr[p]][0];
      k = p;
    }
    return arr;
  }
}


/* output start */
console.log('> output: ' + priorityQueueAdd(input));
/* output end */
