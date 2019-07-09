'use strict';

const HT = require('../../Data-Structures/hashtable/hashtable');

module.exports = (bt1, bt2) => {
  let result = new HT;
  let vals1 = bt1.preOrder();
  let vals2 = bt2.preOrder();

  for (let i of vals1) {
    if (vals2.includes(i) && !result.contains(i))
      result.add({ [i]: i });
  }

  return result;
}