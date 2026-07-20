// Implementation code mapping
export const codeStore = {
  q1: `export function q1_stringToNumber(str: string): number {
  return Number(str) + 7;
}`,
  q2: `export function q2_checkFalsy(val: any): any {
  if (!val) {
    return "Invalid";
  }
  return val;
}`,
  q3: `export function q3_printOddNumbers(): string {
  const results: number[] = [];
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      continue;
    }
    results.push(i);
  }
  return results.join(", ");
}`,
  q4: `export function q4_filterEvenNumbers(arr: number[]): number[] {
  return arr.filter((num) => num % 2 === 0);
}`,
  q5: `export function q5_mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}`,
  q6: `export function q6_getDayOfWeek(dayNum: number): string {
  switch (dayNum) {
    case 1: return "Sunday";
    case 2: return "Monday";
    case 3: return "Tuesday";
    case 4: return "Wednesday";
    case 5: return "Thursday";
    case 6: return "Friday";
    case 7: return "Saturday";
    default: return "Invalid Day";
  }
}`,
  q7: `export function q7_getStringLengths(arr: string[]): number[] {
  return arr.map((str) => str.length);
}`,
  q8: `export function q8_checkDivisibility(num: number): string {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Divisible by both";
  } else if (num % 3 === 0) {
    return "Divisible by 3";
  } else if (num % 5 === 0) {
    return "Divisible by 5";
  } else {
    return "Not divisible by 3 or 5";
  }
}`,
  q9: `export const q9_square = (num: number): number => num * num;`,
  q10: `export function q10_formatPerson(person: Person): string {
  const { name, age } = person;
  return \`\${name} is \${age} years old\`;
}`,
  q11: `export function q11_sumMultiple(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}`,
  q12: `export function q12_delaySuccess(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}`,
  q13: `export function q13_findLargest(arr: number[]): number {
  if (arr.length === 0) {
    throw new Error("Array cannot be empty");
  }
  return Math.max(...arr);
}`,
  q14: `export function q14_getObjectKeys(obj: object): string[] {
  return Object.keys(obj);
}`,
  q15: `export function q15_splitString(str: string): string[] {
  return str.trim().split(/\\s+/);
}`,
  bonus: `export function createCounter(init: number): ReturnObj {
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
}`
};

// Live Execution Functions
export const q1_stringToNumber = (str) => Number(str) + 7;
export const q2_checkFalsy = (val) => !val ? "Invalid" : val;
export const q3_printOddNumbers = () => {
  const r = [];
  for(let i=1;i<=10;i++) { if(i%2!==0) r.push(i); }
  return r.join(", ");
};
export const q4_filterEvenNumbers = (arr) => arr.filter(n => n % 2 === 0);
export const q5_mergeArrays = (a1, a2) => [...a1, ...a2];
export const q6_getDayOfWeek = (n) => {
  const days = ["", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[n] || "Invalid Day";
};
export const q7_getStringLengths = (arr) => arr.map(s => s.length);
export const q8_checkDivisibility = (n) => {
  if (n % 3 === 0 && n % 5 === 0) return "Divisible by both";
  if (n % 3 === 0) return "Divisible by 3";
  if (n % 5 === 0) return "Divisible by 5";
  return "Not divisible by 3 or 5";
};
export const q9_square = (n) => n * n;
export const q10_formatPerson = (p) => `${p.name} is ${p.age} years old`;
export const q11_sumMultiple = (...nums) => nums.reduce((a,c) => a+c, 0);
export const q12_delaySuccess = () => new Promise(res => setTimeout(() => res("Success"), 3000));
export const q13_findLargest = (arr) => Math.max(...arr);
export const q14_getObjectKeys = (obj) => Object.keys(obj);
export const q15_splitString = (str) => str.trim().split(/\s+/);
