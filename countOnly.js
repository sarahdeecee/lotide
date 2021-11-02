const assertEqual = require('./assertEqual');

const countOnly = (allItems, itemsToCount) => {
  // allItems: an array of strings that we need to look through
  // itemsToCount: an object specifying what to count
  //return object containing counts of everything the input obj listed
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;