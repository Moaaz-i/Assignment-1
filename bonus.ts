import { fileURLToPath } from "url";

// Assignment 1 - Part 3: Bonus Question (LeetCode 2665 - Counter II)

type ReturnObj = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

export function createCounter(init: number): ReturnObj {
  let val = init;
  return {
    increment: () => {
      val += 1;
      return val;
    },
    decrement: () => {
      val -= 1;
      return val;
    },
    reset: () => {
      val = init;
      return val;
    },
  };
}

// --- Runner block to show outputs ---
function runBonus() {
  const counter = createCounter(5);
  console.log("const counter = createCounter(5);");
  console.log(
    `1. counter.increment() -> Expected: 6 | Output: ${counter.increment()}`,
  );
  console.log(
    `2. counter.increment() -> Expected: 7 | Output: ${counter.increment()}`,
  );
  console.log(
    `3. counter.reset()     -> Expected: 5 | Output: ${counter.reset()}`,
  );
  console.log(
    `4. counter.decrement() -> Expected: 4 | Output: ${counter.decrement()}`,
  );
  console.log(
    `5. counter.decrement() -> Expected: 3 | Output: ${counter.decrement()}`,
  );
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  runBonus();
}
