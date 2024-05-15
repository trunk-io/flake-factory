import assert from "assert";

describe("Even - minute is divisible by 2", () => {
  it("should verify that the current minute is even", () => {
    const today = new Date();
    const currentMinute = today.getMinutes();

    assert.strictEqual(currentMinute % 2, 0);
  });
});

describe("Odd - minute is divisible by 1", () => {
  it("should verify that the current minute is odd", () => {
    const today = new Date();
    const currentMinute = today.getMinutes();

    assert.strictEqual(currentMinute % 2, 1);
  });
});

describe("X equals 3", function () {
  let X = 0; // X starts at 0
  this.retries(5); // Retry up to 3 times

  it("should pass on 2nd auto-retry", () => {
    // Increment X
    X++;
    assert.strictEqual(X, 3);
  });
});
