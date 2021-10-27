const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    if (i === arr1.length - 1) {
      return true;
    }
  }
};

const assertArraysEqual = (arr1, arr2) => {
  (eqArrays(arr1, arr2)) ? console.log(`⭐️ Assertion Passed: These arrays are equal! ⭐️`)
    : console.log(`🌧 Assertion Failed: These arrays are not equal. 🌧`);
};

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

const testSmall1 = [1];
const testSmall2 = [1, 2];
const resultSmall = [];
const testOdd1 = [2, 3, 4];
const testOdd2 = [1, 2, 3, 4, 5];
const resultOdd = [3];
const testEven1 = [2, 3, 4, 5];
const testEven2 = [1, 2, 3, 4, 5, 6];
const resultEven = [3, 4];

assertArraysEqual(resultOdd,middle(testOdd1));
assertArraysEqual(resultOdd,middle(testOdd2));
assertArraysEqual(resultEven,middle(testEven1));
assertArraysEqual(resultEven,middle(testEven2));