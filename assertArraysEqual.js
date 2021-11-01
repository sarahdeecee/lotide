const eqArrays = require('./eqArrays');

const assertArraysEqual = (arr1, arr2) => {
  (eqArrays(arr1, arr2)) ? console.log(`⭐️ Assertion Passed: These arrays are equal! ⭐️`)
  : console.log(`🌧 Assertion Failed: These arrays are not equal. 🌧`);
}

module.exports = assertArraysEqual;