'use strict';

const Hashtable = require('../../Data-Structures/hashtable/hashtable');

module.exports = str => {
  if (!str || typeof str !== 'string') return 'Please provide a string!';

  let hashtable = new Hashtable;
  let firstDup = null;
  let counts = {};
  let frequency = [];

  str.split(' ').forEach(word => {
    word = word.toLowerCase().replace(',', '');
    if (!firstDup && hashtable.contains(word)) {
      firstDup = word;
    }
    hashtable.add({ [word]: word });
    counts[word] ? counts[word]++ : counts[word] = 1;
  });

  for (let word of Object.entries(counts)) {
    frequency.push(word);
  }
  frequency = frequency.sort((a, b) => b[1] - a[1]);
  frequency = frequency.map(word => word[0]).slice(0, 3);
  console.log(frequency);
  return { firstDup, counts, frequency };
};