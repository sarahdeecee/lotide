const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head(["Light", "house", "labs"]), "Light");
assertEqual(head(["Light", "house", "labs"]), "house");
assertEqual(head(["Light"]), "Light");
assertEqual(head([]), "Light");
assertEqual(head([1, 2, 3, 4]), 1);
assertEqual(head([1, 2, 3, 4]), "1"); //Mismatched types
assertEqual(head(["1", 2, 3, 4]), "1"); //Mismatched types