# Assignment 1: JavaScript & TypeScript Exercises

A structured, professional repository containing the solutions for **Assignment 1**. The project is written in pure **TypeScript** and executed natively using Node.js's built-in type-stripping engine—ensuring modern execution without producing compiled `.js` files.

---

## 📁 Repository Structure

```text
Assignment1/
├── package.json          # Dependency management and run scripts
├── tsconfig.json         # TypeScript configuration
├── index.ts              # Part 1: Solutions to the 15 coding exercises
├── essay.md              # Part 2: Answers to the 5 conceptual questions
├── bonus.ts              # Part 3: LeetCode Counter II (Bonus)
└── index.test.ts         # Automated unit test suite (Vitest)
```

---

## ⚙️ Requirements & Installation

- **Node.js**: `v22.6.0` or higher (required for native TypeScript execution).

To set up the testing framework and local configurations, install the developer dependencies:
```bash
npm install
```

---

## 🚀 Execution Scripts

The repository contains scripts configured in `package.json` for seamless execution:

### 1. Run Coding Exercises (Part 1)
Executes `index.ts` containing the 15 coding tasks.
```bash
npm start
```

### 2. Run LeetCode Bonus (Part 3)
Executes `bonus.ts` containing the Counter II solution.
```bash
npm run bonus
```

### 3. Run Automated Tests
Runs the test suite inside `index.test.ts` via Vitest. It validates all 15 exercises and the bonus code across 16 test cases.
```bash
npm test
```

---

## 📝 Assignment Overview

### Part 1: Coding Tasks (`index.ts`)
1. **String to Number**: Convert `"123"` to a number and add `7`.
2. **Falsy Check**: Check if a variable is falsy and return `"Invalid"`.
3. **Continue Loop**: Print odd numbers from `1` to `10` using `continue`.
4. **Filter Evens**: Extract even numbers from an array using `Array.prototype.filter()`.
5. **Spread Merge**: Merge two arrays using the spread (`...`) operator.
6. **Day of Week**: Map numbers `1` to `7` to weekdays using a `switch` statement.
7. **Map Lengths**: Transform an array of strings into an array of lengths.
8. **Divisibility**: Check if a number is divisible by `3` and `5`.
9. **Arrow Square**: Return the square of a number using arrow syntax.
10. **Object Destructuring**: Destructure properties from a Person object.
11. **Sum Multiple**: Sum variable arguments using rest parameters.
12. **Promise Delay**: Return a promise that resolves with `"Success"` after `3` seconds.
13. **Array Maximum**: Find the largest number in an array.
14. **Object Keys**: Retrieve all keys of a given object.
15. **Split Words**: Split a string into words based on spaces.

### Part 2: Essay Questions (`essay.md`)
Detailed explanations and code snippets covering:
- Differences and use-cases of `forEach` vs `for...of`.
- Hoisting mechanics and the Temporal Dead Zone (TDZ).
- Strict equality (`===`) vs Loose equality (`==`).
- Error handling in asynchronous flows using `try-catch`.
- Explicit Type Conversion vs Implicit Coercion.

### Part 3: Bonus Question (`bonus.ts`)
- Solving LeetCode 2665 (Counter II) with TypeScript types.
