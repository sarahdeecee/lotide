const assertArraysEqual = require('./assertArraysEqual');
const flatten = arr => {
  const flatArr = [];
  for (let level1 of arr) {
    if (Array.isArray(level1)) {
      for (let level2 of level1) {
        flatArr.push(level2);
      }
    } else {
      flatArr.push(level1);
    }
  }
  return flatArr;
};

// const arr1 = [1, 2, 3, 4, 5, 6];
// const arr2 = [1, 2, [3, 4], 5, [6]];
// // const arr3 = [1, 2, 3, 'a', 'b', 'c'];
// // const arr4 = [[1], [2], [3], 'a', ['b'], 'c'];
// // assertArraysEqual(arr1,flatten(arr2));
// // assertArraysEqual(flatten(arr3),flatten(arr4));
// console.log(flatten(arr1));
// console.log(flatten(arr2));
// console.log(flatten(arr1));
// console.log(flatten(arr1));

module.exports = flatten;