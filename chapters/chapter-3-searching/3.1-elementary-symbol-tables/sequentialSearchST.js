console.log('sequentialSearchST:')
/* input start */
var input = require('../../../generator/index').getRandomNumbers();
/* input end */
console.log('> input: ' + input);


// sequentialSearchST
function sequentialSearchST(input) {

  function Node(key, val, next) {
    this.key = key;
    this.val = val;
  }

  return {
    this.links: null,
    insertWhere: function(node, where) {
      var n = new Node(node.key, node.val);
      var l = this.links;
      if(where) {
        while(l) {
          if (l.key == where.key || l.val == where.val) {
            var ll = l.next;
            l.next = n;
            n.next = ll;
            break;
          }
          l = l.next;
        }
      } else {
        n.next = l;
        this.links = n;
      }
    },
    findWhere: function(where) {
      var l = this.links;
      var index = 0;
      while(l) {
        if(l.key == where.key || l.val == where.val) {
          l.index = index;
          return l;
        }
        index++;
        l = l.next;
      }
    }
  }
}


/* output start */
console.log('> output: ' + sequentialSearchST(input));
/* output end */

