const findKeyByValue = (obj, val) => {
  for (let prop in obj) {
    if (obj[prop] === val) {
      return prop;
    }
  }
};

module.exports = findKeyByValue;