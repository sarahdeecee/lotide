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

const takeUntil = (array, callback) => {
  const returnArr = [];
  
  for (let item of array) {
    if (!callback(item)) {
      returnArr.push(item);
    } else {
      return returnArr;
    }
  }
  return returnArr;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const expected1 = [ 1, 2, 5, 7, 2 ];
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const expected2 = [ 'I\'ve', 'been', 'to', 'Hollywood' ];
console.log(results2);

assertArraysEqual(results1,expected1);
assertArraysEqual(results2,expected2);