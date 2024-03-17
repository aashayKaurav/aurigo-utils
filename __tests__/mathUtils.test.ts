import { add, subtract, multiply, divide } from "../src/mathUtils";

test("add function", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtract function", () => {
  expect(subtract(5, 3)).toBe(2);
});

test("multiply function", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("divide function", () => {
  expect(divide(6, 3)).toBe(2);
  expect(() => divide(6, 0)).toThrow("Division by zero");
});
