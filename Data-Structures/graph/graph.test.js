'use strict';

const Graph = require('./graph');

describe('A graph', () => {
  const testGraph = new Graph;

  it('should be empty upon instantiation', () => {
    expect(testGraph.adjacencyList).toBeNull();
  });

  it('should have a size of 0', () => {
    expect(testGraph.size()).toBe(0);
  });

  it('should be able to add new nodes', () => {
    let received = testGraph.addNode('a');

    expect(received.head.value).toBe('a');
    expect(testGraph.size()).toBe(1);
  });
});