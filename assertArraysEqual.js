//writes an error message to console if false (if true -> nothing)
const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`⭐️ Assertion Passed: ${actual} === ${expected} ⭐️`)
    : console.log(`🌧 Assertion Failed: ${actual} !== ${expected} 🌧`);
};

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
}

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [1, 2]);
// assertArraysEqual([1, 2, 3], [1, 2, "3"]);