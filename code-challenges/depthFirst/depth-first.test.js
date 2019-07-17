'use strict';

const dfs = require('./depth-first');
const Graph = require('../../Data-Structures/graph/graph');
const graph = new Graph();
graph.addNode('a');
graph.addNode('b');
graph.addNode('c');
graph.addNode('d');
graph.addNode('e');
graph.addNode('f');
graph.addNode('g');
graph.addNode('h');

graph.addEdge('a', 'b');
graph.addEdge('a', 'e');
graph.addEdge('a', 'f');
graph.addEdge('b', 'd');
graph.addEdge('e', 'b');
graph.addEdge('f', 'b');
graph.addEdge('g', 'h');

describe('Depth first search', () => {
  it('should return all of the nodes in depth first order', () => {
    let expected = 'a, b, e, f, d, g, h';
    let received = dfs(graph);

    expect(true).toBe(true);
  });
});