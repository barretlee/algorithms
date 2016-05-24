console.log('evaluate:')
/* input start */
var input = '( 1 + ( ( 2 + 3 ) * ( 4 + 5 ) )';
input = input.replace(/\s/g, '').split('');
/* input end */
console.log('> input: ' + input.join(' '));


// evaluate
function evaluate(input) {
  input = input.reverse();
  var len = input.length;
  var optStack = [];
  var valStack = [];
  while(len--) {
    var item = input[len];
    switch(item) {
      case "+":
      case "-":
      case "*":
      case "/":
        optStack.push(item);
        break;
      case "(":
        break;
      case ")":
        var a = valStack.pop();
        var b = valStack.pop();
        var opt = optStack.pop();
        valStack.push(eval(a + opt + b));
        break;
      default:
        valStack.push(item);
    }
  }
  return valStack.pop();
}


/* output start */
console.log('> output: ' + evaluate(input));
/* output end */
