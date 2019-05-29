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
    expect(testList.length).toBe(0);
  });

  it('should properly insert a new node at the head', () => {
    testList.insert(...values);

    received = testList.toString();
    expected = values[0].toString();

    expect(received).toBe(expected);
    expect(testList.length).toBe(values.length);
  });

  it('head should properly point to the first node in the linked list', () => {
    received = testList.head.value;
    expected = values[0];

    expect(received).toBe(expected);
    expect(testList.length).toBe(values.length);
  });

  it('can properly insert multiple nodes into the linked list', () => {
    expected = [values[0]];
    for (let i = 2; i < 4; i++) {
      let value = values[0] * i;
      values.push(value);
      expected.push(value);
    }
    testList.insert(...values.slice(1));

    received = testList.toString();
    expected = expected.reverse().join(', ');

    expect(received).toBe(expected);
    expect(testList.length).toBe(values.length);
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

describe('Appending to a singly linked list', () => {
  let testList = new LinkedList();
  let values = [7];
  let expected;
  let received;

  it('should add the new node to the end of the LL', () => {
    testList.insert([5]);
    testList.append(values);

    received = testList.toString();
    expected = '5, 7';

    expect(received).toBe(expected);
    expect(testList.length).toBe(expected.split(', ').length);
  });

  it('should work even if the list is empty', () => {
    testList = new LinkedList();
    testList.append(values);

    received = testList.toString();
    expected = '7';

    expect(received).toBe(expected);
    expect(testList.length).toBe(values.length);
  });

  it('should add as many new nodes as passed in by values', () => {
    testList = new LinkedList();
    values.push(5, 6, 2, 3);
    testList.append(values);

    received = testList.toString();
    expected = values.join(', ');

    expect(received).toBe(expected);
    expect(testList.length).toBe(values.length);
  });
});

describe('InsertBefore to a singly linked list', () => {
  let testList = new LinkedList();
  let values = [7];
  let expected;
  let received;
  testList.insert(5, 6, 10);

  it('should add the new node immediately before the node with specified value', () => {
    testList.insertBefore(5, ...values);

    received = testList.toString();
    expected = '10, 6, 7, 5';

    expect(received).toBe(expected);
    expect(testList.length).toBe(expected.split(', ').length);
  });

  it('should work even if the list only has one node', () => {
    testList = new LinkedList();
    testList.insert(5);
    testList.insertBefore(5, ...values);

    received = testList.toString();
    expected = '7, 5';

    expect(received).toBe(expected);
    expect(testList.length).toBe(expected.split(', ').length);    
  });

  it('should return error message if LL is empty or if node is not found', () => {
    testList = new LinkedList();

    received = testList.insertBefore(5, ...values);
    expected = 'Node does not exist!';

    expect(received).toBe(expected);

    testList.insert(6);
    received = testList.insertBefore(5, ...values);

    expect(received).toBe(expected);
    expect(testList.length).toBe(1);
  });

  it('should add as many new nodes as passed in by values', () => {
    testList = new LinkedList();
    testList.insert(1);
    values.push(5, 6, 2, 3);
    testList.insertBefore(1, ...values);

    received = testList.toString();
    expected = values.join(', ') + ', 1';

    expect(received).toBe(expected);
    expect(testList.length).toBe(expected.split(', ').length);
  });
});

describe('InsertAfter to a singly linked list', () => {
  let testList = new LinkedList();
  let value = 7;
  let expected;
  let received;
  testList.insert(5, 6, 10);

  it('should add a new node immediately after the specified node', () => {
    testList.insertAfter(5, value);

    received = testList.toString();
    expected = '10, 6, 5, 7';

    expect(received).toBe(expected);
    expect(testList.length).toBe(expected.split(', ').length);
  });

  it('should return error message if LL is empty or if node is not found', () => {
    testList = new LinkedList();

    received = testList.insertAfter(5, value);
    expected = 'Node does not exist!';

    expect(received).toBe(expected);
    expect(testList.length).toBe(0);

    testList.insert(6);
    received = testList.insertAfter(5, value);

    expect(received).toBe(expected);
    expect(testList.length).toBe(1);
  });  

  it('should work even if the list only has one node', () => {
    testList = new LinkedList();
    testList.insert(5);
    testList.insertAfter(5, value);

    received = testList.toString();
    expected = '5, 7';

    expect(received).toBe(expected);
    expect(testList.length).toBe(expected.split(', ').length);
  });
});

describe('Delete from a singly linked list', () => {
  let testList = new LinkedList();
  let expected;
  let received;
  testList.insert(5, 6, 10);

  it('should remove the specified node from the list', () => {
    testList.delete(5);

    received = testList.toString();
    expected = '10, 6';

    expect(received).toBe(expected);
    expect(testList.length).toBe(expected.split(', ').length);
  });

  it('should remove the specified node from a list of one node', () => {
    testList = new LinkedList();
    testList.insert(5);
    testList.delete(5);

    received = testList.toString();
    expected = '';

    expect(received).toBe(expected);
    expect(testList.length).toBe(0);
  });

  it('should return error message if LL is empty or if node is not found', () => {
    testList = new LinkedList();

    received = testList.delete(5);
    expected = 'Node does not exist!';

    expect(received).toBe(expected);
    expect(testList.length).toBe(0);

    testList.insert(6);
    received = testList.delete(5);

    expect(received).toBe(expected);
    expect(testList.length).toBe(1);
  });
});

describe('kthFromEnd in a singly linked list', () => {
  let testList = new LinkedList();
  let values = [10, 2, 5, 7, 8, 9];
  let received;
  let expected;
  testList.append(values);

  it('should return the value at node located kth from end', () => {
    received = testList.kth(3);
    expected = 5;

    expect(received).toBe(expected);
  });

  it('should return the value at node located kth from end regardless of length', () => {
    testList = new LinkedList();
    testList.append([5]);

    received = testList.kth(0);
    
    expect(received).toBe(expected);
  });

  it('should return an error message if the list is empty', () => {
    testList = new LinkedList();

    received = testList.kth(5);
    expected = 'Node does not exist!';

    expect(received).toBe(expected);
  });

  it('should return an error message if the node location is large than the length of the list', () => {
    testList.append(values);

    received = testList.kth(10);
    expected = 'Node does not exist!';

    expect(received).toBe(expected);
  });

  it('should work even if the passed location is a negative integer', () => {
    received = testList.kth(-3);
    expected = 5;

    expect(received).toBe(expected);
  });
});

describe('middle of a singly linked list', () => {
  let testList = new LinkedList();
  let values = [10, 5, 6, 2, 3];
  let received;
  let expected;

  it('should return the middle value', () => {
    testList.append(values);

    received = testList.middle();
    expected = 6;

    expect(received).toBe(expected);
  });

  it('should return the value just before the true middle of the LL if LL.length is even', () => {
    testList.append([9]);

    received = testList.middle();
    
    expect(received).toBe(expected);
  });

  it('should return the value if LL length is 1', () => {
    testList = new LinkedList();
    testList.append([6]);

    received = testList.middle();
    expect(received).toBe(expected);
  });
});