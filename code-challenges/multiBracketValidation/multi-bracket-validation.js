'use strict';

const Stack = require('../../Data-Structures/stacksAndQueues/stack');

module.exports = function multiBracketValidation(input) {
  if (typeof input !== 'string') return false;

  const arr = input.match(/[\[\]\{\}\(\)]/g);

  if (!arr) return true;
  if (arr.length % 2 !== 0) return false;

  const openingRegex = /[\[\(\{]/;
  const stack = new Stack();
  const brackets = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  let result = true;
  for (let i = 0; i < arr.length; i++) {
    let stackVal;
    openingRegex.test(arr[i]) ?
      stack.push(arr[i]) :
      stackVal = stack.pop();
    if (stackVal)
      result = brackets[`${stackVal}`] === arr[i];
    if (!result) return result;
  }
  if (stack.peek()) return false;
  return result;
}