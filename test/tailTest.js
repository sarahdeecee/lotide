const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ["Light", "house", "labs"];
const numbers = [1, 2, 3, 4, 5, 6];
const one = [1];
const empty = [];
const result1 = tail(words);
const result2 = tail(numbers);
assertEqual(result1.length, 2);
assertEqual(result1[0], words[1]);
assertEqual(result2[1], numbers[2]);
console.log(`words: ${words} | tail(words): ${tail(words)}`);
console.log(`numbers: ${numbers} | tail(numbers): ${tail(numbers)}`);
console.log(`one: ${one} | tail(one): ${tail(one)}`);
console.log(`empty: ${empty} | tail(empty): ${tail(empty)}`);