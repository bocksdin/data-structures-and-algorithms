'use strict';

const Hashtable = require('../../Data-Structures/hashtable/hashtable');

module.exports = str => {
  if (!str || typeof str !== 'string') return 'Please provide a string!';

  let hashtable = new Hashtable;
  let firstDup = null;

  str.split(' ').forEach(word => {
    word = word.toLowerCase().replace(',', '');
    if (!firstDup && hashtable.contains(word)) {
      firstDup = word;
    }
    let value = {};
    value[word] = word;
    hashtable.add(value);
  });

  return { firstDup };
};