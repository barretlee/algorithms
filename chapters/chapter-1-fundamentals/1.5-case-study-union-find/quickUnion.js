console.log('quickUnion:')
/* input start */
var Generator = require('../../../generator/index');
var input = [];
for(var i = 0; i < 20; i++) {
  input.push(i);
}
var combo = [];
for(var i = 0; i < 30; i++) {
  combo.push(Generator.getEscRandomNumbers(2, 0, input.length).join(','));
}
combo = Generator.noRepeat(combo);
combo = combo.map(function(item) {
  return item.split(',');
}).filter(function(item) {
  return item[0] != item[1];
});
/* input end */
console.log('> input: ' + input + '\n  combo: ' + combo.join('|'));


// quickUnion
function quickUnion(input, combo) {
  for(var i = 0, len = combo.length; i < len; i++) {
    var p = combo[i][0];
    var q = combo[i][1];
    if(root(p) != root(q)) {
      input[p] = q;
    }
  }

  return input;

  function root(n) {
    while(input[n] != n) {
      n = input[n];
    }
    return n;
  }
}


/* output start */
console.log('> output: ' + quickUnion(input, combo));
/* output end */
