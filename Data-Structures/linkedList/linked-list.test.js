'use strict';

const LinkedList = require('./linked-list');

describe('A Singly Linked List', () => {
  const testList = new LinkedList();
  let value = 5;

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
  });

  it('can properly insert multiple nodes into the linked list', () => {
    let expected = [value]
    for (let i = 2; i < 4; i++) {
      value *= i;
      testList.insert(value);
      expected.push(value);
    }

    const received = testList.toString();
    expected = expected.reverse().join(', ');

    expect(received).toBe(expected);
  });
});