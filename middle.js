const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const isTooSmall = arr => {
  return (arr.length <= 2);
};
const isOdd = arr => {
  return (arr.length % 2 === 0) ? false : true;
};

const middle = arr => {
  const middleArr = [];
  const midIndex = Math.floor(arr.length / 2);
  if (isTooSmall(arr)) { //edge: 1-2 elements only, return empty array
    return middleArr;
  } else if (isOdd(arr)) { //odd: return 1 element
    middleArr.push(arr[midIndex]);
    //console.log(arr[midIndex]);
  } else { //even: return 2 elements
    middleArr.push(arr[midIndex - 1]);
    middleArr.push(arr[midIndex]);
  }
  
  return middleArr;
};

module.exports = middle;