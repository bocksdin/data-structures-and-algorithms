'use strict';

const Queue = require('./queue');

describe('Queue', () => {
  let testQueue = new Queue();

  it('should be empty upon instantiation', () => {
    expect(testQueue.front).toBeNull();
    expect(testQueue.back).toBeNull();
  });

  it('peek should look at the front node', () => {
    expect(testQueue.peek()).toBeNull();
  });

  it('enqueue should add new nodes to the end of the queue', () => {
    testQueue.enqueue(5, 6, 7, 8, 9);

    expect(testQueue.front.value).toBe(5);
    expect(testQueue.back.value).toBe(9);
    expect(testQueue.peek().value).toBe(5);
  });
});