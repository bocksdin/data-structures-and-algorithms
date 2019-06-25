'use strict';

const mergeSort = (arr) => {
  if (!(arr instanceof Array)) return 'Expected array as input!';

  if (arr.length > 1) {
    let n = arr.length;
    let mid = Math.floor(n / 2);
    let b = arr.slice(0, mid);
    let c = arr.slice(mid, n);

    mergeSort(b);
    mergeSort(c);
    return merge(b, c, arr);
  }

  return arr;
};

const merge = (b, c, a) => {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < b.length && j < c.length) {
    if (b[i] <= c[j]) {
      a[k] = b[i];
      i++;
    } else {
      a[k] = c[j];
      j++;
    }
    k++;
  }

  while (i < b.length) {
    a[k] = b[i];
    i++;
    k++;
  }

  while (j < c.length) {
    a[k] = c[j];
    j++;
    k++;
  }

  return a;
}

module.exports = mergeSort;