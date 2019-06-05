'use strict';

const mbv = require('./multi-bracket-validation');

test.each([
  [mbv('{}'), true],
  [mbv('{}(){}'), true],
  [mbv('()[[Extra Characters]]'), true],
  [mbv('(){}[[]]'), true],
  [mbv('{}{Code}[Fellows](())'), true],
  [mbv('[({}]'), false],
  [mbv('(]('), false],
  [mbv('{(})'), false],
  [mbv('abc'), true],
  [mbv(''), true],
  [mbv('{{{{{{'), false],
  [mbv('['), false]
])(
  'Received should be expected',
  (received, expected) => {
    expect(received).toBe(expected);
  },
);