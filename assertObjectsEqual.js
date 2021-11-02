const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  (eqObjects(actual, expected)) ? console.log(`⭐️ Assertion Passed: These objects are equal! ${inspect(actual)} === ${inspect(expected)} ⭐️`)
  : console.log(`🌧 Assertion Failed: These objects are not equal. ${inspect(actual)} !== ${inspect(expected)} 🌧`);
};

// const test1 = { color: "red", size: "small" };
// const test2 = { size: "small", color: "red" };
// const test3 = { size: "small", color: "blue" };
// const testArr1 = { color: ["red", "white"], size: "small" };
// const testArr2 = { size: "small", color: ["red", "white"] };
// test1Props = Object.keys(test1);
// console.log(`Testing identical objects: \n${assertObjectsEqual(test1, test2)}`);
// console.log(`Testing non-identical objects: \n${assertObjectsEqual(test1, test3)}`);
// console.log(`Testing array values: \n${assertObjectsEqual(testArr1, testArr2)}`);

module.exports = assertObjectsEqual;