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

  it('should add new items to the table', () => {
    let received = Hashtable.add();
    expect(received).toBe('Must provide an object!');

    received = Hashtable.add({ hello: 'world' });
    expect(received.head.value).toStrictEqual({ hello: 'world' });

    received = Hashtable.add({ new: 'object' });
    expect(received.head.value).toStrictEqual({ new: 'object' });
  });

});