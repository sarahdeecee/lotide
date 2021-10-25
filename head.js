const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`⭐️ Assertion Passed: ${actual} === ${expected} ⭐️`)
    : console.log(`🌧 Assertion Failed: ${actual} !== ${expected} 🌧`);
};

const head = function(array) {
  return array.length > 0 ? array[0] : undefined;
}

assertEqual(head(["Light", "house", "labs"]), "Light");
assertEqual(head(["Light", "house", "labs"]), "house");
assertEqual(head(["Light"]), "Light");
assertEqual(head([]), "Light");
assertEqual(head([1, 2, 3, 4]), 1);
assertEqual(head([1, 2, 3, 4]), "1"); //Mismatched types
assertEqual(head(["1", 2, 3, 4]), "1"); //Mismatched types