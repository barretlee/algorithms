console.log('sequentialSearchST:')
/* input start */
var input = 'it was the best of times it was the worst of times'
/* input end */
console.log('> input: ' + input);


// SequentialSearchST
function SequentialSearchST() {

  /**
   * Define list Node.
   * @constructor
   * @param {String} key  the current node
   * @param {Number} val  the times that key appears
   * @param {Number} next the next node
   */

  function Node(key, val, next) {
    this.key = key;
    this.val = val;
    this.next = next;
  }

  var first = null;

  return {

    /**
     * Find the `key` and return the value.
     * @param {String} key cuurent key
     * @return {Number} val current key's value
     */

    get: function(key) {
      for (var x = first; x != null; x = x.next) {
        if (key == x.key) return x.val;
      }
      return null;
    },

    /**
     * Find the `key` and update the `val`, else insert a new one.
     * @param {String} key cuurent key
     * @param {Number} val current key's new value
     */

    put: function(key, val) {
      for (var x = first; x != null; x = x.next) {
        if (key == x.key) {
          x.val = val;
          return;
        }
      }
      first = new Node(key, val, first);
    },

    /**
     * Find the `key` and return the existance.
     * @param {String} key cuurent key
     * @return {Boolean}
     */

    contains: function(key) {
      for (var x = first; x != null; x = x.next) {
        if (key == x.key) return true;
      }
      return false;
    },

    /**
     * Find the key and return the value.
     * @return {Array} arr current key's array
     */

    keys: function() {
      arr = []
      for (var x = first; x != null; x = x.next) {
        arr.push(x.key);
      }
      return arr.reverse();
    }
  }
}

function frequencyCounter(input) {

    var st = new SequentialSearchST();
    var minLen = 1;

    for (var i=0; i < input.split(' ').length; i++) {
      var word = input.split(' ')[i];
      if (word.length < minLen) continue;
      if (!st.contains(word)) st.put(word, 1);
      else st.put(word, st.get(word) + 1);
    }

    max = '';
    st.put(max, 0);
    st.keys().forEach(function(word) {
      if (st.get(word) > st.get(max)) max = word;
    })

    output = max + ' ' + st.get(max);
    return output
}


/* output start */
console.log('> output: ' + frequencyCounter(input));
/* output end */
