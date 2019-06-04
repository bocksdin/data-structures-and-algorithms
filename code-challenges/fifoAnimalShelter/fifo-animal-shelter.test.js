'use strict';

const AnimalShelter = require('./fifo-animal-shelter');

describe('AnimalShelter', () => {
  let testQueue = new AnimalShelter();

  it('should be empty upon instantiation', () => {
    expect(testQueue.front).toBeNull();
    expect(testQueue.back).toBeNull();
  });

  it('enqueue should add new nodes to the end of the queue', () => {
    testQueue.enqueue('cat', 'dog', 'cat', 'cat', 'dog');

    expect(testQueue.front.value).toBe('cat');
    expect(testQueue.back.value).toBe('dog');
  });

  it('dequeue should remove the front node from the queue and return the value', () => {
    expect(testQueue.dequeue('dog')).toBe('dog');
    expect(testQueue.dequeue('cat')).toBe('cat');
    expect(testQueue.dequeue('moose')).toBe('cat');
    expect(testQueue.dequeue()).toBe('cat');
  });
});