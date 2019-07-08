'use strict';

const repeatedWord = require('./repeated-word');

describe('The repeatedWord function', () => {
  it.each([
    ['', 'Please provide a string!'],
    [123, 'Please provide a string!'],
    [{ hello: 'world' }, 'Please provide a string!']
  ])(
    '%s should return %s',
    (received, expected) => {
      expect(repeatedWord(received)).toBe(expected);
    }
  );

  it.each([
    ['Once upon a time, there was a brave princess who', 'a'],
    ['It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only', 'it'],
    ['It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York', 'summer']
  ])(
    '%s should return %s',
    (received, expected) => {
      expect(repeatedWord(received).firstDup).toBe(expected);
    }
  );

  it.each([
    ['Once', { 'once': 1 }],
    ['It was', { 'it': 1, 'was': 1 }],
    ['Buffalo buffalo buffalo buffalo buffalo buffalo buffalo', { 'buffalo': 7 }]
  ])(
    '%s should return %s',
    (received, expected) => {
      expect(repeatedWord(received).counts).toStrictEqual(expected);
    }
  );

  it.each([
    ['The the the how now brown cow now did how he could', ['the', 'how', 'now']],
    ['It was the best of times, it was the worst of times, it was the age of wisdom', ['it', 'was', 'the']],
    ['It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York', ['summer', 'the', 'was']]
  ])(
    '%s should return %s',
    (received, expected) => {
      expect(repeatedWord(received).frequency).toStrictEqual(expected);
    }
  );
});