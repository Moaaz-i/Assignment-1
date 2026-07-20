// Assignment 1 - Part 1: Coding Questions

// 1. Convert the string "123" to a number and add 7. (0.5 Grade)
export function q1_stringToNumber(str: string): number {
  return Number(str) + 7;
}

// 2. Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
export function q2_checkFalsy(val: any): any {
  if (!val) {
    return "Invalid";
  }
  return val;
}

// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
export function q3_printOddNumbers(): string {
  const results: number[] = [];
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      continue;
    }
    results.push(i);
  }
  return results.join(", ");
}

// 4. Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
export function q4_filterEvenNumbers(arr: number[]): number[] {
  return arr.filter((num) => num % 2 === 0);
}

// 5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
export function q5_mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

// 6. Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday). (0.5 Grade)
export function q6_getDayOfWeek(dayNum: number): string {
  switch (dayNum) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid Day";
  }
}

// 7. Create an array of strings and return their lengths using map method (0.5 Grade)
export function q7_getStringLengths(arr: string[]): number[] {
  return arr.map((str) => str.length);
}

// 8. Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
export function q8_checkDivisibility(num: number): string {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Divisible by both";
  } else if (num % 3 === 0) {
    return "Divisible by 3";
  } else if (num % 5 === 0) {
    return "Divisible by 5";
  } else {
    return "Not divisible by 3 or 5";
  }
}

// 9. Write a function using arrow syntax to return the square of a number (0.5 Grade)
export const q9_square = (num: number): number => num * num;

// 10. Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
interface Person {
  name: string;
  age: number;
}
export function q10_formatPerson(person: Person): string {
  const { name, age } = person;
  return `${name} is ${age} years old`;
}

// 11. Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
export function q11_sumMultiple(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
export function q12_delaySuccess(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}

// 13. Write a function to find the largest number in an array. (0.5 Grade)
export function q13_findLargest(arr: number[]): number {
  if (arr.length === 0) {
    throw new Error("Array cannot be empty");
  }
  return Math.max(...arr);
}

// 14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
export function q14_getObjectKeys(obj: object): string[] {
  return Object.keys(obj);
}

// 15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
export function q15_splitString(str: string): string[] {
  return str.trim().split(/\s+/);
}

// --- Runner block to show outputs ---
async function runAllExercises() {
  console.log('1. q1_stringToNumber("123") + 7:');
  console.log(`   Output: ${q1_stringToNumber("123")}\n`);

  console.log("2. q2_checkFalsy(0):");
  console.log(`   Output: ${JSON.stringify(q2_checkFalsy(0))}\n`);

  console.log("3. q3_printOddNumbers() (1 to 10 skipping evens):");
  console.log(`   Output: ${q3_printOddNumbers()}\n`);

  console.log("4. q4_filterEvenNumbers([1, 2, 3, 4, 5]):");
  console.log(
    `   Output: ${JSON.stringify(q4_filterEvenNumbers([1, 2, 3, 4, 5]))}\n`,
  );

  console.log("5. q5_mergeArrays([1, 2, 3], [4, 5, 6]):");
  console.log(
    `   Output: ${JSON.stringify(q5_mergeArrays([1, 2, 3], [4, 5, 6]))}\n`,
  );

  console.log("6. q6_getDayOfWeek(2):");
  console.log(`   Output: "${q6_getDayOfWeek(2)}"\n`);

  console.log('7. q7_getStringLengths(["a", "ab", "abc"]):');
  console.log(
    `   Output: ${JSON.stringify(q7_getStringLengths(["a", "ab", "abc"]))}\n`,
  );

  console.log("8. q8_checkDivisibility(15):");
  console.log(`   Output: "${q8_checkDivisibility(15)}"\n`);

  console.log("9. q9_square(5):");
  console.log(`   Output: ${q9_square(5)}\n`);

  console.log("10. q10_formatPerson({ name: 'John', age: 25 }):");
  console.log(`    Output: '${q10_formatPerson({ name: "John", age: 25 })}'\n`);

  console.log("11. q11_sumMultiple(1, 2, 3, 4, 5):");
  console.log(`    Output: ${q11_sumMultiple(1, 2, 3, 4, 5)}\n`);

  console.log("13. q13_findLargest([1, 3, 7, 2, 4]):");
  console.log(`    Output: ${q13_findLargest([1, 3, 7, 2, 4])}\n`);

  console.log("14. q14_getObjectKeys({ name: 'John', age: 30 }):");
  console.log(
    `    Output: ${JSON.stringify(q14_getObjectKeys({ name: "John", age: 30 }))}\n`,
  );

  console.log('15. q15_splitString("The quick brown fox"):');
  console.log(
    `    Output: ${JSON.stringify(q15_splitString("The quick brown fox"))}\n`,
  );

  console.log("12. q12_delaySuccess() (waiting 3 seconds...):");
  const promiseResult = await q12_delaySuccess();
  console.log(`    Output: "${promiseResult}"\n`);
}

runAllExercises();
