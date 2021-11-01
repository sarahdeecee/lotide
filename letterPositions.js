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

const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

let test = "hello";
let test2 = "lighthouse in the house";
// const result = { h: 0, e: 1, l: [2, 3], o: 4};
console.log(letterPositions(test));
console.log(letterPositions(test2));