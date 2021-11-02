const assertEqual = require('./assertEqual');

const countLetters = (sentence) => {
  // return count of letters
  const results = {};
  const noSpaces = sentence.split(" ").join("");
  for (let char of noSpaces) {
    if (results[char]) {
      results[char] += 1;
    } else {
      results[char] = 1;
    }
  }
  return results;
};

console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;