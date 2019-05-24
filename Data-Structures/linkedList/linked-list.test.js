'use strict';

const LinkedList = require('./linked-list');

describe('A Singly Linked List', () => {
  it('should create an empty singly linked list', () => {
    const emptyList = new LinkedList();

    const expected = null;

    expect(emptyList.head).toStrictEqual(expected);
  });
});