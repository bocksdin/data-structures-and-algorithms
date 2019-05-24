'use strict';

const LinkedList = require('./linked-list');
const value = 5;

describe('A Singly Linked List', () => {
  const testList = new LinkedList();

  it('should create an empty singly linked list', () => {

    const expected = null;

    expect(testList.head).toStrictEqual(expected);
  });

  it('should properly insert a new node at the head', () => {
    testList.insert(value);
    
    const received = testList.toString();
    const expected = value.toString();

    expect(received).toBe(expected);
  });

  it('head should properly point to the first node in the linked list', () => {
    const received = testList.head.value;
    const expected = value;

    expect(received).toBe(expected);
  })
});