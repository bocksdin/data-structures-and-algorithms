'use strict';

const LinkedList = require('./linked-list');

describe('A Singly Linked List', () => {
  const testList = new LinkedList();
  let value = 5;
  let expected;
  let received;

  it('should create an empty singly linked list', () => {

    expected = null;

    expect(testList.head).toStrictEqual(expected);
  });

  it('should properly insert a new node at the head', () => {
    testList.insert(value);
    
    received = testList.toString();
    expected = value.toString();

    expect(received).toBe(expected);
  });

  it('head should properly point to the first node in the linked list', () => {
    received = testList.head.value;
    expected = value;

    expect(received).toBe(expected);
  });

  it('can properly insert multiple nodes into the linked list', () => {
    expected = [value]
    for (let i = 2; i < 4; i++) {
      value *= i;
      testList.insert(value);
      expected.push(value);
    }

    received = testList.toString();
    expected = expected.reverse().join(', ');

    expect(received).toBe(expected);
  });

  it('will return true when finding a value within the linked list that exists', () => {
    value = expected.split(', ')
      .reverse()[0];
    value = parseInt(value);
    
    received = testList.includes(value);
    expected = true;

    expect(received).toBe(expected);
  });
});