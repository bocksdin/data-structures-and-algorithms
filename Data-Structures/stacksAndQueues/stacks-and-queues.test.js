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

  it('pop should remove the top node from the stack and return it\'s value', () => {
    expect(testStack.pop()).toBe(5);
    expect(testStack.peek()).toBeNull();
  });

  it('pop should err when the stack is empty', () => {
    expect(testStack.pop()).toBe('Cannot pop() from an empty stack!');
  });
});