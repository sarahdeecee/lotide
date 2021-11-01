const assertEqual = require('../assertEqual');

console.log("Non-identical strings: ");
assertEqual("Lighthouse Labs", "Bootcamp");
console.log("Identical strings: ");
assertEqual("Light", "Light");
console.log("Identical numbers: ");
assertEqual(1, 1);
console.log("Mismatched types: ");
assertEqual(1, "1");
console.log("Non-identical numbers: ");
assertEqual(1, 5);
