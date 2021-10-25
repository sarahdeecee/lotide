const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`⭐️ Assertion Passed: ${actual} === ${expected} ⭐️`)
    : console.log(`🌧 Assertion Failed: ${actual} !== ${expected} 🌧`);
};

const tail = function(array) {
  return array.length > 1 ? array.slice(1, array.length) : [];
};

const words = ["Light", "house", "labs"];
const numbers = [1, 2, 3, 4, 5, 6];
const one = [1];
const empty = [];
const result1 = tail(words);
const result2 = tail(numbers);
assertEqual(result1.length, 2);
assertEqual(result1[0], words[1]);
assertEqual(result2[1], numbers[2]);
console.log(tail(words));
console.log(tail(numbers));
console.log(tail(one));
console.log(tail(empty));