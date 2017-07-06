console.log('binarySearchTree:')
/* input start */
var input = require('../../../generator/index').getRandomNumbers();
/* input end */
console.log('> input: ' + input);


// binarySearchTree
function binarySearchTree(input) {
  var root;
  function Node (key, val, N) {
    this.key = key;
    this.val = val;
    this.N = N;
    this.left = null;
    this.right = null;
  }
  function size(x) {
    if (!x) return 0;
    return x.N;
  }
  function min(x) {
    if (!x.left) return x;
    return min(x.left);
  }
  return {
    size: function() {
      return size(root);
    },
    min: function(x) {
      return min(x).key;
    },
    get: function (x, key) {
      if (!x) return null;
      if (x.key === key) return x.val;
      if (x.key > key) return get(x.right, key);
      if (x.key < key) return get(x.right, key);
    },
    put: function(x, key, val) {
      if (!x) return new x(key, val, 1);
      if (x.key === key) x.val = val;
      else if (x.key > key) put(x.right, key, val);
      else if (x.key < key) put(x.left, key, val);
      x.N = size(x.left) + size(x.right) + 1;
      return x;
    }
    
  }
  return output;
}


/* output start */
console.log('> output: ' + binarySearchTree(input));
/* output end */
