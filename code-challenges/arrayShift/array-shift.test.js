'use strict';

const insertShiftArray = (arr, value) => {
  if (Array.isArray(arr)) {
    let result = [];
    const middleIndex = Math.ceil(arr.length / 2);
    for (let i = 0; i < arr.length + 1; i++) {
      if (i === middleIndex) {
        result[i] = value;
      } else if (i > middleIndex) {
        result[i] = arr[i - 1];
      } else {
        result[i] = arr[i];
      }
    }
    arr = result;
    return arr;
  } else {
    return null;
  }
}

const deleteShiftArray = arr => {
  if (Array.isArray(arr)) {
    let result = [];
    const middleIndex = Math.floor(arr.length / 2);
    for (let i = 0; i < arr.length; i++) {
      if (i === middleIndex) {
        continue;
      } else if (i > middleIndex) {
        result[i - 1] = arr[i];
      } else {
        result[i] = arr[i];
      }
    }
    return result;
  } else {
    return null;
  }
}

xdescribe('Insert Array Shift', () => {
  it('Should return the given array with the given value inserted into the middle index of the given array', () => {
    let arr = [1, 2, 4, 5];
    const value = 3;
    expect(insertShiftArray(arr, value)).toEqual([1,2,value,4,5]);
  });

  it('Should work regardless of the type of value', () => {
    let arr = ['hello', 'my', 'is', 'Rory'];
    const value = {height: 74};
    expect(insertShiftArray(arr, value)).toEqual(['hello', 'my', value, 'is', 'Rory']);
  });

  it('Should return the given array with the given value inserted right after the middle index of the array if the given array has an odd length', () => {
    let arr = [1,2,3,5,6];
    const value = 4;
    expect(insertShiftArray(arr, value)).toEqual([1,2,3,value,5,6]);
  })

  it('Should return null if an array is not given', () => {
    let obj = {name: 'Rory', age: 29};
    const value = {height: 74};
    expect(insertShiftArray(obj, value)).toBe(null);
  })
});

xdescribe('Delete Array Shift', () => {
  it('Should return the given array with the value at the middle index removed', () => {
    let arr = [1,2,3,4,5];
    expect(deleteShiftArray(arr)).toEqual([1,2,4,5]);
  })

  it('Should return the given array with the value at the index equal to arr.length / 2 removed', () => {
    let arr = [1,2,4,5];
    expect(deleteShiftArray(arr)).toEqual([1,2,5]);
  })
  
  it('Should return null if an array is not given', () => {
    let obj = {name: 'Rory', age: 29};
    expect(deleteShiftArray(obj)).toBe(null);
  })
})