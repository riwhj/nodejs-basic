const TestRunner = require("jest-runner");

describe("test fizzbuzz", () => {
  TestRunner("test 1 expect", () => {
    const result = fizzbuzz.say(1);
    expect(result).toEqual(1);
  });
});
