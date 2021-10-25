//writes an error message to console if false (if true -> nothing)
const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`⭐️ Assertion Passed: ${actual} === ${expected} ⭐️`)
    : console.log(`🌧 Assertion Failed: ${actual} !== ${expected} 🌧`);
};
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); //Non-identical strings
assertEqual("Light", "Light"); //Identical strings
assertEqual(1, 1); //Identical numbers
assertEqual(1, "1"); //Mismatched types
assertEqual(1, 5); //Non-identical numbers
