'use strict';

const Hashtable = require('./hashtable');
const hashtable = new Hashtable;

describe('A hashtable', () => {
  it.each([
    [hashtable.hash(), 'Must provide a key!'],
    [hashtable.hash('hello'), 84],
    [hashtable.hash(543), 84],
    [hashtable.hash([105, 2, 3, 4]), 25]
  ])(
    '%s should be %s',
    (received, expected) => {
      expect(received).toBe(expected);
    });

  it('should add new items to the table', () => {
    let received = hashtable.add();
    expect(received).toBe('Must provide an object!');

    received = hashtable.add({ hello: 'world' });
    expect(received.value).toStrictEqual({ hello: 'world' });

    received = hashtable.add({ new: 'object' });
    expect(received.value).toStrictEqual({ new: 'object' });
  });

  it('should get items from the table', () => {
    let received = hashtable.get();
    expect(received).toBe('Must provide a key!');

    received = hashtable.get('hello');
    expect(received).toStrictEqual({ hello: 'world' });

    received = hashtable.get('new');
    expect(received).toStrictEqual({ new: 'object' });

    received = hashtable.get('does not exist');
    expect(received).toBeNull();
  });

  it('should return true or false if it contains a key', () => {
    let received = hashtable.contains();
    expect(received).toBe('Must provide a key!');

    received = hashtable.contains('hello');
    expect(received).toBe(true);

    received = hashtable.contains('new');
    expect(received).toBe(true);

    received = hashtable.contains('does not exist');
    expect(received).toBe(false);
  });

});