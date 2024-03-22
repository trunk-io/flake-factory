import assert;
import Numbers from "../../src/random.js";

// const chai = require('chai').assert;

describe("RandomNumbers", () => {

  const numbers = new Numbers();

describe("95% or fail", () => {
  it("pick a number that satisfies a random query 95% of the time", () => {  
    const randomNumber = numbers.getRandomNumber(100);
    assert(randomNumber <= 95);
    assert.oneOf(3, d);
  });
});

describe("Coin toss", () => {
  it("pick a number that passes 50/50", () => {  
    const randomNumber = numbers.getRandomNumber(100);
    assert(randomNumber <= 50);
  });
});

});
