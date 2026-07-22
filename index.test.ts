import { describe, it, expect } from "vitest";
import {
  q1_stringToNumber,
  q2_checkFalsy,
  q3_printOddNumbers,
  q4_filterEvenNumbers,
  q5_mergeArrays,
  q6_getDayOfWeek,
  q7_getStringLengths,
  q8_checkDivisibility,
  q9_square,
  q10_formatPerson,
  q11_sumMultiple,
  q12_delaySuccess,
  q13_findLargest,
  q14_getObjectKeys,
  q15_splitString,
} from "./index.ts";
import { createCounter } from "./bonus.ts";
import {
  q1_forEachVsForOf,
  q2_hoistingAndTDZ,
  q3_looseVsStrictEquality,
  q4_tryCatchInAsync,
  q5_typeConversionVsCoercion,
} from "./essay.ts";

describe("Assignment 1 - Coding Questions (Part 1)", () => {
  it("Q1: Convert string to number and add 7", () => {
    expect(q1_stringToNumber("123")).toBe(130);
    expect(q1_stringToNumber("0")).toBe(7);
  });

  it("Q2: Check if falsy and return 'Invalid'", () => {
    expect(q2_checkFalsy(0)).toBe("Invalid");
    expect(q2_checkFalsy("")).toBe("Invalid");
    expect(q2_checkFalsy(false)).toBe("Invalid");
    expect(q2_checkFalsy(null)).toBe("Invalid");
    expect(q2_checkFalsy(undefined)).toBe("Invalid");
    expect(q2_checkFalsy("Valid String")).toBe("Valid String");
  });

  it("Q3: Print odd numbers 1 to 10 skipping evens", () => {
    expect(q3_printOddNumbers()).toBe("1, 3, 5, 7, 9");
  });

  it("Q4: Filter even numbers using filter method", () => {
    expect(q4_filterEvenNumbers([1, 2, 3, 4, 5])).toEqual([2, 4]);
    expect(q4_filterEvenNumbers([10, 15, 20, 25])).toEqual([10, 20]);
  });

  it("Q5: Merge two arrays using spread operator", () => {
    expect(q5_mergeArrays([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(q5_mergeArrays(["a"], ["b", "c"])).toEqual(["a", "b", "c"]);
  });

  it("Q6: Get day of week using switch statement", () => {
    expect(q6_getDayOfWeek(1)).toBe("Sunday");
    expect(q6_getDayOfWeek(2)).toBe("Monday");
    expect(q6_getDayOfWeek(7)).toBe("Saturday");
    expect(q6_getDayOfWeek(8)).toBe("Invalid Day");
  });

  it("Q7: Get lengths of strings using map method", () => {
    expect(q7_getStringLengths(["a", "ab", "abc"])).toEqual([1, 2, 3]);
    expect(q7_getStringLengths(["Hello", "World"])).toEqual([5, 5]);
  });

  it("Q8: Check divisibility by 3 and 5", () => {
    expect(q8_checkDivisibility(15)).toBe("Divisible by both");
    expect(q8_checkDivisibility(9)).toBe("Divisible by 3");
    expect(q8_checkDivisibility(20)).toBe("Divisible by 5");
    expect(q8_checkDivisibility(7)).toBe("Not divisible by 3 or 5");
  });

  it("Q9: Calculate square of a number", () => {
    expect(q9_square(5)).toBe(25);
    expect(q9_square(0)).toBe(0);
    expect(q9_square(-3)).toBe(9);
  });

  it("Q10: Destructure object and format string", () => {
    expect(q10_formatPerson({ name: "John", age: 25 })).toBe("John is 25 years old");
  });

  it("Q11: Sum multiple parameters", () => {
    expect(q11_sumMultiple(1, 2, 3, 4, 5)).toBe(15);
    expect(q11_sumMultiple(10, 20)).toBe(30);
    expect(q11_sumMultiple()).toBe(0);
  });

  it("Q12: Resolve promise after delay", async () => {
    const result = await q12_delaySuccess();
    expect(result).toBe("Success");
  });

  it("Q13: Find largest number in array", () => {
    expect(q13_findLargest([1, 3, 7, 2, 4])).toBe(7);
    expect(q13_findLargest([-10, -5, -20])).toBe(-5);
    expect(() => q13_findLargest([])).toThrow();
  });

  it("Q14: Get object keys as an array", () => {
    expect(q14_getObjectKeys({ name: "John", age: 30 })).toEqual(["name", "age"]);
  });

  it("Q15: Split string into words", () => {
    expect(q15_splitString("The quick brown fox")).toEqual(["The", "quick", "brown", "fox"]);
  });
});

describe("Assignment 1 - Essay Questions (Part 2)", () => {
  it("Q1: Explain forEach vs for...of", () => {
    const q1 = q1_forEachVsForOf();
    expect(q1.explanation).toContain("forEach");
    expect(q1.differenceTable["Control Flow"]).toBeDefined();
    expect(q1.demo().forEachOutput).toEqual([20, 40, 60]);
    expect(q1.demo().forOfOutput).toEqual([20, 40]);
  });

  it("Q2: Explain hoisting and TDZ", () => {
    const q2 = q2_hoistingAndTDZ();
    expect(q2.hoistingExplanation).toContain("Hoisting");
    expect(q2.tdzExplanation).toContain("Temporal Dead Zone");
    expect(q2.demo().varVal).toBeUndefined();
    expect(q2.demo().tdzCaught).toBe(true);
  });

  it("Q3: Explain == vs ===", () => {
    const q3 = q3_looseVsStrictEquality();
    expect(q3.examples.length).toBeGreaterThan(0);
    expect(q3.examples[0].loose).toBe(true);
    expect(q3.examples[0].strict).toBe(false);
  });

  it("Q4: Explain try-catch in async operations", async () => {
    const q4 = q4_tryCatchInAsync();
    expect(q4.asyncImportance).toContain("Async");
    const result = await q4.demoAsyncTryCatch();
    expect(result.success).toBe(false);
    expect(result.error).toBe("Network connection failed");
  });

  it("Q5: Explain type conversion vs coercion", () => {
    const q5 = q5_typeConversionVsCoercion();
    expect(q5.examples.conversion[0].result).toBe(42);
    expect(q5.examples.coercion[0].result).toBe("The answer is 42");
  });
});

describe("Assignment 1 - Bonus (Part 3)", () => {
  it("Should create a counter and increment, decrement and reset correctly", () => {
    const counter = createCounter(5);
    expect(counter.increment()).toBe(6);
    expect(counter.increment()).toBe(7);
    expect(counter.reset()).toBe(5);
    expect(counter.decrement()).toBe(4);
    expect(counter.decrement()).toBe(3);
  });
});
