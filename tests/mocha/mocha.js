import assert from "assert";

describe("Even handed - minute is divible by 2", () => {
  it("should verify that the current minute is even", () => {
    const today = new Date();
    const currentMinute = today.getMinutes();

    assert.strictEqual(currentMinute % 2, 0);
  });
});

describe("Odd handed - minute is divible by 1", () => {
  it("should verify that the current minute is odd", () => {
    const today = new Date();
    const currentMinute = today.getMinutes();

    assert.strictEqual(currentMinute % 2, 1);
  });
});
