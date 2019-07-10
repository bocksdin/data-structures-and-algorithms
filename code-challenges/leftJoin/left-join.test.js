'use strict';

const HT = require('../../Data-Structures/hashtable/hashtable');
const leftJoin = require('./left-join');

describe('LeftJoin', () => {
  let hm1 = new HT;
  let hm2 = new HT;

  hm1.add({ fond: 'enamored' });
  hm1.add({ wrath: 'anger' });
  hm1.add({ diligent: 'employed' });
  hm1.add({ outfit: 'garb' });
  hm1.add({ guide: 'usher' });

  hm2.add({ fond: 'averse' });
  hm2.add({ wrath: 'delight' });
  hm2.add({ diligent: 'idle' });
  hm2.add({ guide: 'follow' });
  hm2.add({ flow: 'jam' });

  it('should return a list of items', () => {
    let received = leftJoin(hm1, hm2);
    let expected = [
      ['outfit', 'garb', null],
      ['guide', 'usher', 'follow'],
      ['wrath', 'anger', 'delight'],
      ['fond', 'enamored', 'averse'],
      ['diligent', 'employed', 'idle']
    ];

    expect(received).toStrictEqual(expected);
  });
});