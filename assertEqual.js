//writes an error message to console if false (if true -> nothing)
const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`⭐️ Assertion Passed: ${actual} === ${expected} ⭐️`)
    : console.log(`🌧 Assertion Failed: ${actual} !== ${expected} 🌧`);
};

module.exports = assertEqual;