const eqArrays = require('./eqArrays');

const eqObjects = (obj1, obj2) => {
  obj1Keys = Object.keys(obj1);
  obj2Keys = Object.keys(obj2);

  obj1Keys.sort();
  obj2Keys.sort();
  if (eqArrays(obj1Keys,obj2Keys)) {
    for (let key of obj1Keys) {
      if (Array.isArray(obj1[key])) {
        if (!eqArrays(obj1[key],obj2[key])) {
          return false;
        }
      } else if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  }
};

module.exports = eqObjects;