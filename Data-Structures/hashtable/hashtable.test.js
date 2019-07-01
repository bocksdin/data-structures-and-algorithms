'use strict';

const Hashtable = require('./hashtable');

describe('A hashtable', () => {
  it.each([
    [Hashtable.hash(), 'Must provide a key!'],
    [Hashtable.hash('hello'), 84],
    [Hashtable.hash(543), 84],
    [Hashtable.hash([105, 2, 3, 4]), 25]
  ])(
    '%s should be %s',
    (received, expected) => {
      expect(received).toBe(expected);
    });

});