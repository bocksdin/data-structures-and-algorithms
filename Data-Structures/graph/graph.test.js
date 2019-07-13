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

  it('shouldn\'t be able to add duplicate nodes', () => {
    let received = testGraph.addNode('a');

    expect(received).toBe('Node already exists!');
    expect(testGraph.size()).toBe(1);
  });

  it('should be able to create new edges', () => {
    let error = testGraph.addEdge('a', 'missing', 1);
    testGraph.addNode('b');
    let good = testGraph.addEdge('a', 'b', 1);

    expect(error).toBe('missing doesn\'t exist!');
    expect(good).toBeUndefined();
  });

  it('should be able to retrieve all of the nodes', () => {
    let received = testGraph.getNodes();

    expect(received).toStrictEqual(['a', 'b']);
  });
});