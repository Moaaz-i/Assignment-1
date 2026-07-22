// Assignment 1 - Part 2: Essay Questions

/**
 * 1. What is the difference between forEach and for...of? When would you use each? (0.5 Grade)
 */
export function q1_forEachVsForOf(): {
  explanation: string;
  differenceTable: Record<string, { forEach: string; forOf: string }>;
  recommendation: string;
  demo: () => { forEachOutput: number[]; forOfOutput: number[] };
} {
  return {
    explanation:
      "forEach is a functional Array prototype method that executes a callback function for each array element, whereas for...of is a language-level loop statement that iterates over any iterable object.",
    differenceTable: {
      "Control Flow": {
        forEach: "Cannot use break, continue, or return (return acts like continue in callback).",
        forOf: "Supports break, continue, and return statements.",
      },
      "Async Operations": {
        forEach: "Does not wait for promises returned by async callbacks.",
        forOf: "Supports await inside the loop (sequential async execution).",
      },
      "Iterable Support": {
        forEach: "Defined primarily on Arrays, Sets, Maps, and NodeLists.",
        forOf: "Iterates over any Iterable (Arrays, Strings, Maps, Sets, Generators, arguments).",
      },
      "Sparse Arrays": {
        forEach: "Skips empty / unassigned slots in arrays.",
        forOf: "Includes empty slots as undefined.",
      },
    },
    recommendation:
      "Use forEach for clean, functional iteration over array elements when early exit is not needed. Use for...of when you need break/continue, async/await support, or are iterating over non-Array iterables.",
    demo: () => {
      const forEachOutput: number[] = [];
      const forOfOutput: number[] = [];

      [10, 20, 30].forEach((val) => forEachOutput.push(val * 2));

      for (const val of [10, 20, 30]) {
        if (val === 30) break; // for...of supports early exit!
        forOfOutput.push(val * 2);
      }

      return { forEachOutput, forOfOutput };
    },
  };
}

/**
 * 2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples. (0.5 Grade)
 */
export function q2_hoistingAndTDZ(): {
  hoistingExplanation: string;
  tdzExplanation: string;
  examples: {
    varHoisting: string;
    functionHoisting: string;
    tdzError: string;
  };
  demo: () => { varVal: undefined; fnVal: string; tdzCaught: boolean };
} {
  return {
    hoistingExplanation:
      "Hoisting is JavaScript's default behavior during compilation where variable and function declarations are moved in memory to the top of their containing scope prior to code execution.",
    tdzExplanation:
      "The Temporal Dead Zone (TDZ) is the period between scope entry and the evaluation/initialization of a let or const variable. Accessing a variable within its TDZ throws a ReferenceError.",
    examples: {
      varHoisting: "console.log(a); // undefined (var a is hoisted & initialized to undefined)\nvar a = 5;",
      functionHoisting: "greet(); // 'Hello!' (Function declarations are fully hoisted with implementation)\nfunction greet() { return 'Hello!'; }",
      tdzError: "console.log(b); // ReferenceError: Cannot access 'b' before initialization\nlet b = 10;",
    },
    demo: () => {
      // Demonstrating var hoisting
      // @ts-ignore - Demonstrating hoisting behavior
      var varVal = hoistedVar;
      var hoistedVar = "now assigned";

      // Demonstrating function hoisting
      const fnVal = hoistedFunction();
      function hoistedFunction() {
        return "Function called before definition";
      }

      // Demonstrating TDZ safety check
      let tdzCaught = false;
      try {
        // @ts-ignore - Simulating TDZ access evaluation
        eval("console.log(tdzVar); let tdzVar = 5;");
      } catch (err) {
        tdzCaught = err instanceof ReferenceError;
      }

      return { varVal: undefined, fnVal, tdzCaught };
    },
  };
}

/**
 * 3. What are the main differences between == and ===? (0.5 Grade)
 */
export function q3_looseVsStrictEquality(): {
  looseEquality: string;
  strictEquality: string;
  examples: Array<{ expression: string; loose: boolean; strict: boolean }>;
  recommendation: string;
} {
  return {
    looseEquality:
      "== (Abstract/Loose Equality) compares values after performing implicit type coercion if operands are of different types.",
    strictEquality:
      "=== (Strict Equality) compares both value AND type without type coercion. If types differ, it immediately evaluates to false.",
    examples: [
      { expression: '"5" vs 5', loose: "5" == (5 as any), strict: ("5" as any) === 5 },
      { expression: "0 vs false", loose: 0 == (false as any), strict: (0 as any) === false },
      { expression: "null vs undefined", loose: null == (undefined as any), strict: null === (undefined as any) },
      { expression: "[1] vs 1", loose: [1] == (1 as any), strict: ([1] as any) === 1 },
    ],
    recommendation:
      "Always use strict equality (===) to prevent unexpected implicit type coercion bugs, except when explicitly checking for nullish values (val == null checks both null and undefined).",
  };
}

/**
 * 4. Explain how try-catch works and why it is important in async operations. (0.5 Grade)
 */
export function q4_tryCatchInAsync(): {
  mechanism: string;
  asyncImportance: string;
  demoAsyncTryCatch: () => Promise<{ success: boolean; data?: string; error?: string }>;
} {
  return {
    mechanism:
      "try-catch provides exception handling. Code inside 'try' is executed; if an exception is thrown, control immediately shifts to 'catch', receiving the error object. An optional 'finally' block always executes cleanup logic.",
    asyncImportance:
      "Async operations (network requests, API calls, file I/O) can fail due to external factors. In async/await code, promises reject asynchronously. Wrapping 'await' expressions in try-catch catches rejected promises synchronously within the function context, preventing process crashes or unhandled promise rejections.",
    demoAsyncTryCatch: async () => {
      try {
        const simulatedFetch = new Promise<string>((_, reject) =>
          setTimeout(() => reject(new Error("Network connection failed")), 100)
        );
        const data = await simulatedFetch;
        return { success: true, data };
      } catch (err: any) {
        return { success: false, error: err.message };
      }
    },
  };
}

/**
 * 5. What's the difference between type conversion and coercion? Provide examples of each. (0.5 Grade)
 */
export function q5_typeConversionVsCoercion(): {
  typeConversion: string;
  typeCoercion: string;
  examples: {
    conversion: Array<{ code: string; result: any; type: string }>;
    coercion: Array<{ code: string; result: any; type: string }>;
  };
} {
  return {
    typeConversion:
      "Type Conversion (Explicit) occurs when the programmer deliberately converts a value from one type to another using built-in functions like Number(), String(), Boolean(), or parseInt().",
    typeCoercion:
      "Type Coercion (Implicit) occurs automatically by JavaScript behind the scenes during operations involving mixed types or truthiness evaluations.",
    examples: {
      conversion: [
        { code: 'Number("42")', result: Number("42"), type: typeof Number("42") },
        { code: "String(100)", result: String(100), type: typeof String(100) },
        { code: "Boolean(1)", result: Boolean(1), type: typeof Boolean(1) },
      ],
      coercion: [
        { code: '"The answer is " + 42', result: "The answer is " + 42, type: typeof ("The answer is " + 42) },
        { code: '"10" - 5', result: ("10" as any) - 5, type: typeof (("10" as any) - 5) },
        { code: '"0" == false', result: ("0" as any) == false, type: typeof (("0" as any) == false) },
      ],
    },
  };
}

// --- Runner block to print answers in console ---
async function runAllEssayQuestions() {
  console.log("=================================================");
  console.log("   Assignment 1 - Part 2: Essay Questions Solutions");
  console.log("=================================================\n");

  // Question 1
  const q1 = q1_forEachVsForOf();
  console.log("1. Difference between forEach and for...of:");
  console.log(`   Explanation: ${q1.explanation}`);
  console.log(`   Recommendation: ${q1.recommendation}`);
  console.log(`   Demo Output:`, q1.demo(), "\n");

  // Question 2
  const q2 = q2_hoistingAndTDZ();
  console.log("2. Hoisting & Temporal Dead Zone (TDZ):");
  console.log(`   Hoisting: ${q2.hoistingExplanation}`);
  console.log(`   TDZ: ${q2.tdzExplanation}`);
  console.log(`   Demo Output:`, q2.demo(), "\n");

  // Question 3
  const q3 = q3_looseVsStrictEquality();
  console.log("3. Main differences between == and ===:");
  console.log(`   Loose (==): ${q3.looseEquality}`);
  console.log(`   Strict (===): ${q3.strictEquality}`);
  console.log(`   Examples:`, q3.examples, "\n");

  // Question 4
  const q4 = q4_tryCatchInAsync();
  console.log("4. Try-Catch in Async Operations:");
  console.log(`   Mechanism: ${q4.mechanism}`);
  console.log(`   Async Importance: ${q4.asyncImportance}`);
  const asyncDemo = await q4.demoAsyncTryCatch();
  console.log(`   Async Demo Output:`, asyncDemo, "\n");

  // Question 5
  const q5 = q5_typeConversionVsCoercion();
  console.log("5. Type Conversion vs Coercion:");
  console.log(`   Conversion: ${q5.typeConversion}`);
  console.log(`   Coercion: ${q5.typeCoercion}`);
  console.log(`   Explicit Examples:`, q5.examples.conversion);
  console.log(`   Implicit Examples:`, q5.examples.coercion, "\n");
}

runAllEssayQuestions();
