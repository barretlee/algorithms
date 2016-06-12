/**
 * @author Barret Lee<barret.china@gmail.com>
 * @description Base generator of random data.
 * @license MIT
 */

// Default maximum number
var MAX = 1E5;
// Default minimum number
var MIN = 0;
// Default scope of string -> new RegExp("\w")
var STRING = 'ABCDEDFHIJKLMNOPQRSTUVWXYZabcdedfhijklmnopqrstuvwxyz0123456789_';
// Default amount of random data
var AMOUNT = 20;

module.exports = {
  /**
   * product one random number between `min` and `max`.
   * @param  {Number} min   minimum number
   * @param  {Number} max   maximum number
   * @return {Number} Random Number
   */
  getRandomNumber: function(min, max) {
    min = min || MIN;
    max = max || MAX;
    return Math.floor(Math.random() * (max - min)) + min;
  },
  /**
   * product one random charactor at the scope of `string`.
   * @param  {String} string   scope of string
   * @return {String} a charactor of `string`
   */
  getRandomString: function(string) {
    string = string || STRING;
    return string.charAt(Math.floor(Math.random() * string.length));
  },
  /**
   * product `amount` random numbers between `min` and `max`.
   * @param  {Number} min   minimum number
   * @param  {Number} max   maximum number
   * @param  {Number} amount
   * @return {Array} Random Number Array
   *
   * @example
   *   getRandomNumbers();
   *   getRandomNumbers(amount);
   *   getRandomNumbers(min, max);
   *   getRandomNumbers(amount, min, max);
   */
  getRandomNumbers: function(/*amount, min, max*/) {
    var amount, min, max;
    switch(arguments.length) {
      case 0:
        amount = AMOUNT;
      min = MIN;
      max = MAX;
      break;
      case 1:
        amount = arguments[0];
      min = MIN;
      max = MAX;
      break;
      case 2:
        amount = AMOUNT;
      min = arguments[0];
      max = arguments[1];
      break;
      case 3:
        amount = arguments[0];
      min = arguments[1];
      max = arguments[2];
      break;
      default:
        throw new Error('Arguments error.');
    }
    var arr = [];
    while(amount--) {
      arr.push(this.getRandomNumber(min, max));
    }
    return arr;
  },
  /**
   * product `amount` random numbers between `min` and `max`, list at desc order.
   * @param  {Number} min   minimum number
   * @param  {Number} max   maximum number
   * @param  {Number} amount
   * @return {Array}
   *
   * @example
   *   getDescRandomNumbers();
   *   getDescRandomNumbers(amount);
   *   getDescRandomNumbers(min, max);
   *   getDescRandomNumbers(amount, min, max);
   */
  getDescRandomNumbers: function(/*amount, min, max*/) {
    var amount, min, max;
    switch(arguments.length) {
      case 0:
        amount = AMOUNT;
      min = MIN;
      max = MAX;
      break;
      case 1:
        amount = arguments[0];
      min = MIN;
      max = MAX;
      break;
      case 2:
        amount = AMOUNT;
      min = arguments[0];
      max = arguments[1];
      break;
      case 3:
        amount = arguments[0];
      min = arguments[1];
      max = arguments[2];
      break;
      default:
        throw new Error('Arguments error.');
    }
    return this.getRandomNumbers(amount, min, max).sort(function(a, b) {
      return a < b ? 1 : -1;
    });
  },
  /**
   * product `amount` random numbers between `min` and `max`, list at esc order.
   * @param  {Number} min   minimum number
   * @param  {Number} max   maximum number
   * @param  {Number} amount
   * @return {Array}
   *
   * @example
   *   getEscRandomNumbers();
   *   getEscRandomNumbers(amount);
   *   getEscRandomNumbers(min, max);
   *   getEscRandomNumbers(amount, min, max);
   */
  getEscRandomNumbers: function(/*amount, min, max*/) {
    var amount, min, max;
    switch(arguments.length) {
      case 0:
        amount = AMOUNT;
      min = MIN;
      max = MAX;
      break;
      case 1:
        amount = arguments[0];
      min = MIN;
      max = MAX;
      break;
      case 2:
        amount = AMOUNT;
      min = arguments[0];
      max = arguments[1];
      break;
      case 3:
        amount = arguments[0];
      min = arguments[1];
      max = arguments[2];
      break;
      default:
        throw new Error('Arguments error.');
    }
    return this.getRandomNumbers(amount, min, max).sort(function(a, b) {
      return a > b ? 1 : -1;
    });
  },
  /**
   * product random string at the scope of `string`.
   * @param  {Number} amount string length
   * @param  {String} string the scope of string
   * @return {String}
   *
   * @example
   *   getRandomStrings();
   *   getRandomStrings(amount);
   *   getRandomStrings(string);
   *   getRandomStrings(amount, string);
   */
  getRandomStrings: function(/*amount, string*/) {
    var amount, string;
    switch(arguments.length) {
      case 0:
        amount = AMOUNT;
      case 1:
        if(typeof arguments[0] === 'number') {
        amount = arguments[0];
        string = STRING;
      } else {
        amount = AMOUNT;
        string = arguments[0];
      }
      break;
      case 2:
        amount = arguments[0];
      string = arguments[1];
      break;
      default:
        throw new Error('Arguments error.');
    }
    var str = [];
    while (amount--) {
      str.push(this.getRandomString(string));
    }
    return str.join('');
  },
  /**
   * get no-repeat data.
   * @param {String|Array}
   */
  noRepeat: function() {
    var ret = [], arr = [], arg = arguments[0];
    arr = arg;
    if(typeof arg === 'string') {
      arr = arg.split('');
    }
    for(var i = 0, len = arr.length; i < len; i++) {
      if(ret.indexOf(arr[i]) === -1) {
        ret.push(arr[i]);
      }
    }
    return typeof arg === 'string' ? ret.join('') : ret;
  }
};
