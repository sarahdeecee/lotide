const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// const results2 = map(words, word => word.length);
// const results3 = map(words, word => word.toUpperCase());
// const results4 = map(words, word => word.replace(/[aeiou]/,"*"));
// console.log('word[0]: ', results1);
// console.log('word.length: ',results2);
// console.log('word.toUpperCase(): ',results3);
// console.log('word.replace(/[aeiou]/,"*"): ',results4);

module.exports = map;