Algorithms in JavaScript
---

**[Detail & Discusion (讨论和细节)](https://github.com/barretlee/algorithms/issues)**

All algorithms writing with JavaScript in book '[Algorithms Fourth Edition](http://www.amazon.com/Algorithms-4th-Robert-Sedgewick/dp/032157351X?ie=UTF8&keywords=Algorithms%20Fourth%20Edition&qid=1464068185&ref_=sr_1_1&sr=8-1)'.

### Usage

Run `generator/create.js` to generate code template.

```bash
# create a file with `file.xtpl` at `chapter/chapter-1-xxx/1.2-xxx/test.js`
node generator/create 1.2/test

# delete file `chapter/chapter-1-xxx/1.2-xxx/test.js` if exists
node generator/create 1.2/test -d
```

The template is: 

```javascript
console.log('<%- fileName %>:')
/* input start */
var input = require('../../../generator/index').getRandomNumbers();
/* input end */
console.log('> input: ' + input);


// <%- fileName %>
function <%- fileName %>(input) {
  var output;
  return output;
}


/* output start */
console.log('> output: ' + <%- fileName %>(input));
/* output end */
```

There are many functions in `genetator/index` for generating data. such as:

```javascript
var input = require('./generator/index').getRandomNumbers();
// -> [random numbers which length is default 20 between 0 to 1E5]
```


### License

The MIT License (MIT)

Copyright (c) 2016 小胡子哥