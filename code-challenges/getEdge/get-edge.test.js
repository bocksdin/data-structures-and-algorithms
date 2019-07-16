'use strict';

const Graph = require('../../Data-Structures/graph/graph');
const getEdge = require('./get-edge');

describe('GetEdge', () => {
  const flights = new Graph();

  flights.addNode('Pandora');
  flights.addNode('Arendelle');
  flights.addNode('New Monstropolis');
  flights.addNode('Naboo');
  flights.addNode('Narnia');
  flights.addNode('Metroville');

  flights.addEdge('Pandora', 'Arendelle', 150);
  flights.addEdge('Pandora', 'Metroville', 82);
  flights.addEdge('Metroville', 'Arendelle', 99);
  flights.addEdge('New Monstropolis', 'Arendelle', 42);
  flights.addEdge('New Monstropolis', 'Metroville', 105);
  flights.addEdge('New Monstropolis', 'Naboo', 73);
  flights.addEdge('Metroville', 'Naboo', 26);
  flights.addEdge('Narnia', 'Naboo', 250);
  flights.addEdge('Narnia', 'Metroville', 37);

  it.each([
    [flights, ['Metroville', 'Pandora'], [true, '$82']],
    [flights, ['Arendelle', 'New Monstropolis', 'Naboo'], [true, '$115']],
    [flights, ['Naboo', 'Pandora'], [false, '$0']],
    [flights, ['Narnia', 'Arendelle', 'Naboo'], [false, '$0']]
  ])(
    'Flights should return a boolean and the cost of direct flights',
    (graph, route, expected) => {
      expect(getEdge(graph, route)).toStrictEqual(expected);
    }
  )
});