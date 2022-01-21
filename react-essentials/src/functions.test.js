import { timesTwo, half } from "./functions";

test("Multiplies by two", () => {
  expect(timesTwo(4)).toBe(8);
});

test("Half", () => {
  expect(half(10)).toBe(5);
});
