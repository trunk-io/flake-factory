const assert = require("assert");

describe("Even handed - minute is divible by 2", function () {
  it("should verify that the current minute is even", function () {
    const today = new Date();
    const currentMinute = today.getMinutes();

    assert.strictEqual(currentMinute % 2, 0);
  });
});

describe("Odd handed - minute is divible by 1", function () {
  it("should verify that the current minute is odd", function () {
    const today = new Date();
    const currentMinute = today.getMinutes();

    assert.strictEqual(currentMinute % 2, 1);
  });
});
