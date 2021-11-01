const tail = require('../tail');
const assert = require('chai').assert;

const array = [1, 2, 3, 4, 5, 6];

describe("#tail", () => {
  it("returns ['house', 'labs'] for ['Light', 'house', 'labs']", () => {
    assert.deepEqual(tail(['Light', 'house', 'labs']), ['house', 'labs']); 
  });
  it("returns [ 2, 3, 3, 4, 5, 6 ]  for [ 1, 2, 3, 4, 5, 6 ]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6]),[2, 3, 4, 5, 6]);
  });
  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]),[]);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]),[]);
  });
  it("should not change the original array", () => {
    assert.notDeepEqual(tail(array),array);
  });
});