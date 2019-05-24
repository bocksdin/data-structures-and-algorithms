'use strict';

const LinkedList = require('./linked-list');

describe('A Singly Linked List', () => {
  const testList = new LinkedList();

  it('should create an empty singly linked list', () => {

    const expected = null;

    expect(testList.head).toStrictEqual(expected);
  });

  it.only('should properly insert a new node at the head', () => {
    const value = 5;
    testList.insert(5);
    
    const received = testList.toString();
    const expected = value.toString();

    expect(received).toBe(expected);
  });
});