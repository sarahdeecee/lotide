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
};

const eqObjects = (obj1, obj2) => {
  //check perfect match

  //Check number of keys
  obj1Keys = Object.keys(obj1);
  obj2Keys = Object.keys(obj2);

  //sort arrays of obj keys
  // console.log(obj1Keys,obj2Keys);
  obj1Keys.sort();
  obj2Keys.sort();
  // console.log(obj1Keys,obj2Keys);
  if (eqArrays(obj1Keys,obj2Keys)) {
    for (let key of obj1Keys) {
      if (Array.isArray(obj1[key])) { //key is an array
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

// const test1 = { color: "red", size: "small" };
// const test2 = { size: "small", color: "red" };
// const test3 = { size: "small", color: "blue" };
// const testArr1 = { color: ["red", "white"], size: "small" };
// const testArr2 = { size: "small", color: ["red", "white"] };
// test1Props = Object.keys(test1);
// console.log(`Testing identical objects: ${eqObjects(test1, test2)}`);
// console.log(`Testing non-identical objects: ${eqObjects(test1, test3)}`);
// console.log(`Testing array values: ${eqObjects(testArr1, testArr2)}`);