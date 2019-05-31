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
    expect(testQueue.length).toBe(5);
  });

  it('dequeue should remove the front node from the queue and return the value', () => {
    expect(testQueue.dequeue()).toBe(5);
    expect(testQueue.length).toBe(4);
    expect(testQueue.dequeue()).toBe(6);
    expect(testQueue.length).toBe(3);
    expect(testQueue.dequeue()).toBe(7);
    expect(testQueue.length).toBe(2);
    expect(testQueue.dequeue()).toBe(8);
    expect(testQueue.length).toBe(1);
    expect(testQueue.dequeue()).toBe(9);
    expect(testQueue.length).toBe(0);
    expect(testQueue.dequeue()).toBe('The queue is empty!');
  });
});