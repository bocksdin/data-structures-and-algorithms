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
});