'use strict';

const LL = require('../linkedList/linked-list');

class Graph {
  constructor() {
    this.adjacencyList = [];
  }

  addNode(node) {
    const exists = this.adjacencyList.find(i => i.head.value === node);
    if (exists) return 'Node already exists!';

    const newNode = new LL();
    newNode.insert(node);
    this.adjacencyList.push(newNode);
    return newNode;
  }

  addEdge(n1, n2, weight) {
    let node1 = this.adjacencyList.find(i => i.head.value === n1);
    if (!node1) return `${n1} doesn't exist!`;

    let node2 = this.adjacencyList.find(i => i.head.value === n2);
    if (!node2) return `${n2} doesn't exist!`;

    node1.append({ node: n2, weight });
    node2.append({ node: n1, weight });
  }

  getNodes() {
    if (!this.adjacencyList.length) return this.adjacencyList;

    return this.adjacencyList.map(i => i.head.value);
  }

  getNeighbors(node) {
    if (!this.adjacencyList.length) return [];

    let nodeConnections = this.adjacencyList.find(i => i.head.value === node);
    if (nodeConnections) return nodeConnections.toString().split(', ').slice(1).map(i => JSON.parse(i));

    return [];
  }

  size() {
    return this.adjacencyList.length;
  }
}

module.exports = Graph;