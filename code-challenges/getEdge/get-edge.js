'use strict';

module.exports = (graph, route) => {
  let price = 0;
  let result = true;

  for (let i = 0; i < route.length - 1; i++) {
    const path = graph.getNeighbors(route[i]).find(n => n.node === route[i + 1]);
    if (!path) { result = false; break; }

    price += path.weight;
  }

  return [result, (result ? `$${price}` : '$0')];
}