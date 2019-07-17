'use strict';

const Stack = require('../../Data-Structures/stacksAndQueues/stack');

module.exports = (graph, root = graph.adjacencyList.length ? 0 : null) => {
  if (root === null) return 'Graph is empty!';

  const stack = new Stack();
  let result = [];
  let visited = {};
  let nodes = graph.getNodes();

  stack.push(graph.adjacencyList[root]);
  while (stack.peek()) {
    let node = stack.pop();
    result.push(node.head.value);
    visited[node.head.value] = true;
    let neighbors = graph.getNeighbors(node.head.value);
    for (let i of neighbors)
      if (!visited[i.node]) {
        stack.push(graph.adjacencyList[nodes.indexOf(i.node)]);
      }
  }

  console.log(result);
  return result.join(', ');
}