import {
  reverseString,
  capitalizeString,
  countCharacters,
  truncateString,
} from "../src/stringUtils";

test("reverseString function", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("capitalizeString function", () => {
  expect(capitalizeString("hello")).toBe("Hello");
});

test("countCharacters function", () => {
  expect(countCharacters("hello")).toBe(5);
});

test("truncateString function", () => {
  expect(truncateString("hello world", 5)).toBe("hello...");
  expect(truncateString("hello world", 20)).toBe("hello world");
});
