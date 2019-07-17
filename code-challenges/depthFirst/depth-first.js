'use strict';

let result = [];

module.exports = (graph, root = graph.adjacencyList.length ? 0 : null) => {
  if (root === null) return 'Graph is empty!';

  let visited = {};
  for (let i of graph.adjacencyList)
    visited[i.head.value] = false;

  let nodes = graph.adjacencyList.map(i => i.head.value);

  traverse(graph, nodes, root, visited);

  // console.log(result);
  // return result.join(', ');
}

const traverse = (graph, nodes, vertex, visited) => {
  visited[nodes[vertex]] = true;

  result.push(...graph.getNeighbors(nodes[vertex]));


}