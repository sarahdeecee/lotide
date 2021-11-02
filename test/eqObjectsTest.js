const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it('returns true for { color: "red", size: "small" } and { size: "small", color: "red" }', () => {
    assert.isTrue(eqObjects({ color: "red", size: "small" }, { size: "small", color: "red" }));
  });
  it('returns false for { size: "small", color: "red" } and { size: "small", color: "blue" }', () => {
    assert.isFalse(eqObjects({ size: "small", color: "red" }, { size: "small", color: "blue" }));
  });
  it('returns true for objects with arrays { color: ["red", "white"], size: "small" } and { size: "small", color: ["red", "white"] }', () => {
    assert.isTrue(eqObjects({ color: ["red", "white"], size: "small" }, { size: "small", color: ["red", "white"] }));
  });

});