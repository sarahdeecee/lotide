const assertEqual = require('./assertEqual');

const tail = function(array) {
  return array.length > 1 ? array.slice(1, array.length) : [];
};

module.exports = tail;