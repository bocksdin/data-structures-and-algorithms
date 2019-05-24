'use strict';

const LinkedList = require('./linked-list');

describe('A Singly Linked List', () => {
  const testList = new LinkedList();
  let values = [5];
  let expected;
  let received;

  it('should create an empty singly linked list', () => {

    expected = null;

    expect(testList.head).toStrictEqual(expected);
  });

  it('should properly insert a new node at the head', () => {
    testList.insert(values);
    
    received = testList.toString();
    expected = values[0].toString();

    expect(received).toBe(expected);
  });

  it('head should properly point to the first node in the linked list', () => {
    received = testList.head.value;
    expected = values[0];

    expect(received).toBe(expected);
  });

  it('can properly insert multiple nodes into the linked list', () => {
    expected = [values[0], values[0]];
    for (let i = 2; i < 4; i++) {
      let value = values[0] * i;
      values.push(value);
      expected.push(value);
    }    
    testList.insert(values);

    received = testList.toString();
    expected = expected.reverse().join(', ');

    expect(received).toBe(expected);
  });

  it('will return true when finding a value within the linked list that exists', () => {
    let value = expected.split(', ')
      .reverse()[0];
    value = parseInt(value);
    
    received = testList.includes(value);

    expect(received).toBe(true);
  });

  it('will return false when passed value does not exist in the linked list', () => {    
    received = testList.includes(undefined);

    expect(received).toBe(false);
  });

  it('will return a collection of all the values that exist in the linked list', () => {
    received = testList.toString();
    
    expect(received).toBe(expected);
  });
});