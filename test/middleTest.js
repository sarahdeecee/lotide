const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

const testSmall1 = [1];
const testSmall2 = [1, 2];
const resultSmall = [];
const testOdd1 = [2, 3, 4];
const testOdd2 = [1, 2, 3, 4, 5];
const resultOdd = [3];
const testEven1 = [2, 3, 4, 5];
const testEven2 = [1, 2, 3, 4, 5, 6];
const resultEven = [3, 4];

assertArraysEqual(resultOdd, middle(testOdd1));
assertArraysEqual(resultOdd, middle(testOdd2));
assertArraysEqual(resultEven, middle(testEven1));
assertArraysEqual(resultEven, middle(testEven2));