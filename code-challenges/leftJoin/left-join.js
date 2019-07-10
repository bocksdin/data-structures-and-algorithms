'use strict';

module.exports = (hm1, hm2) => {
  let vals1 = hm1.data.map(bucket => bucket ? JSON.parse(bucket.toString()) : bucket).filter(bucket => bucket);
  let vals2 = hm2.data.map(bucket => bucket ? bucket.toString() : bucket).filter(bucket => bucket);
  vals2[0] = vals2[0].split(', ');
  vals2.push(...vals2[0]);
  vals2 = vals2.filter(bucket => !(bucket instanceof Array)).map(bucket => JSON.parse(bucket));

  let result = [];
  for (let val of vals1) {
    let key = Object.keys(val)[0];
    let value = Object.values(val)[0];
    result.push([key, value]);
  }

  for (let val of vals2) {
    for (let i of result) {
      let key = i[0];
      if (Object.keys(val)[0] === key) {
        i.push(Object.values(val)[0]);
      }
    }
  }

  return result.map(x => x.length < 3 ? x.concat([null]) : x);
}