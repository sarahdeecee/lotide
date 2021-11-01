const head = require('../head');
const assert = require('chai').assert;

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns 'Light' for ['Light', 'house', 'labs']", () => {
    assert.strictEqual(head(['Light', 'house', 'labs']), 'Light'); 
  });
  it("does not return 'house' for ['Light', 'house', 'labs']", () => {
    assert.notStrictEqual(head(['Light', 'house', 'labs']), 'house'); 
  });
  it("does not return '1' for [1, 2, 3, 4]", () => {
    assert.notStrictEqual(head([1, 2, 3, 4]), '1'); 
  });
  it("returns '1' for ['1', 2, 3, 4]", () => {
    assert.strictEqual(head(['1', 2, 3, 4]), '1'); 
  });  
});