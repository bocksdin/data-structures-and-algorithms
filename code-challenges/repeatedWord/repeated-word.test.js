'use strict';

const repeatedWord = require('./repeated-word');

describe('The repeatedWord function', () => {
  it.each([
    [repeatedWord(''), 'Please provide a string!'],
    [repeatedWord(123), 'Please provide a string!'],
    [repeatedWord({ hello: 'world' }), 'Please provide a string!']
  ])(
    '%s should return %s',
    (received, expected) => {
      expect(received).toBe(expected);
    }
  )
});