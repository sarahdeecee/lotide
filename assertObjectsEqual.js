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

const eqObjects = (obj1, obj2) => {
  obj1Keys = Object.keys(obj1);
  obj2Keys = Object.keys(obj2);

  obj1Keys.sort();
  obj2Keys.sort();
  if (eqArrays(obj1Keys,obj2Keys)) {
    for (let key of obj1Keys) {
      if (Array.isArray(obj1[key])) {
        if (!eqArrays(obj1[key],obj2[key])) {
          return false;
        }
      } else if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  }
};

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