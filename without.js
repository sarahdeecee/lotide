const without = (source, itemsToRemove) => {
  const newArray = [];
  //find each item
  console.log(`${source} - ${itemsToRemove}`);
  for (let elem of source) {
    console.log(elem);
    if (!itemsToRemove.includes(elem)) { //remove unwanted items
      newArray.push(elem)
    }
  }
  //return new array
  return newArray;
};

// const words = ["hello", "world", "lighthouse"];
// console.log(words);
// console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// console.log(without([1, 2, 3], [1]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));

module.exports = without;