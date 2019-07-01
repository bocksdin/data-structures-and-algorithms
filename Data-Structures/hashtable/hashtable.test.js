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
    expect(received.value).toStrictEqual({ hello: 'world' });

    received = Hashtable.add({ new: 'object' });
    expect(received.value).toStrictEqual({ new: 'object' });
  });

  it('should get items from the table', () => {
    let received = Hashtable.get();
    expect(received).toBe('Must provide a key!');

    received = Hashtable.get('hello');
    expect(received).toStrictEqual({ hello: 'world' });

    received = Hashtable.get('new');
    expect(received).toStrictEqual({ new: 'object' });

    received = Hashtable.get('does not exist');
    expect(received).toBeNull();
  });

});