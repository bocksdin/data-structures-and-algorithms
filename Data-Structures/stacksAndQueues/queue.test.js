'use strict';

const Queue = require('./queue');

describe('Queue', () => {
  let testQueue = new Queue();

  it('should be empty upon instantiation', () => {
    expect(testQueue.front).toBeNull();
    expect(testQueue.back).toBeNull();
  });
});