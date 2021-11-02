const countOnly = require('../countOnly');
const assert = require('chai').assert;

const firstNames = [ "Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Salima", "Fang", "Joe", "Jason"];
const testNames = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

describe("#countOnly", () => {
  it('returns { Fang: 2, Jason: 1} for { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }', () => {
    assert.deepEqual(countOnly(firstNames, testNames),{ Fang: 2, Jason: 1});
  });
});