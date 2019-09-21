const Fizzbuzz = require("./fizzbuzz");

describe("test fizzbuzz", () => {
  test("test 1 expect", () => {
    const result = Fizzbuzz.say(1);
    expect(result).toEqual(1);
  });
});
