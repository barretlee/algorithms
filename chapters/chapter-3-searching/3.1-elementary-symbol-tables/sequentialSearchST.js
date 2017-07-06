// console.log('sequentialSearchST:')
/* input start */
// var input = require('../../../generator/index').getRandomNumbers();
/* input end */
// console.log('> input: ' + input);


// sequentialSearchST
function sequentialSearchST() {

  function Node(key, val, next) {
    this.key = key;
    this.val = val;
  }

  return {
    links: null,
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
      var depth = 0;
      while(l) {
        if(l.key == where.key || l.val == where.val) {
          var output = { depth: depth };
          for(var key  in l) if(key !== 'next') output[key] = l[key];
          return output;
        }
        depth++;
        l = l.next;
      }
      return -1;
    }
  }
}


var st = new sequentialSearchST();

// insert {key: b, val: b}
st.insertWhere({
  key: 'b',
  val: 'b'
});
// insert {key: a, val: a}
st.insertWhere({
  key: 'a',
  val: 'a'
});
// insert {key: r, val: r} before where key = a
st.insertWhere({
  key: 'r',
  val: 'r'
}, {
  key: 'a'
});
// insert {key: b, val: b}
st.insertWhere({
  key: 't',
  val: 't'
});

console.log(JSON.stringify(st.links, null, 2));

console.log(st.findWhere({key: 'b'}));

/* output start */
// console.log('> output: ' + sequentialSearchST(input));
/* output end */

