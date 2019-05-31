'use strict';

const Stack = require('./stacks-and-queues');

describe('Stack', () => {
  let testStack = new Stack();

  it('should be empty upon instantiation', () => {
    expect(testStack.top).toBeNull();
  });

  it('should peek at the top of the stack', () => {
    expect(testStack.peek()).toBeNull();
  });

  it('push should insert new nodes to the top of the stack', () => {
    testStack.push(5);
    expect(testStack.peek().value).toBe(5);
  });
});