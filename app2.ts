/**
 * 在函数中使用类型注解
 * 括号后面的: number是返回值
 */
function add(a: number, b: number): number {
  return a + b;
}

// 如果函数没有返回值，可以使用 void 类型
function greet(name: string): string {
  return `Hello, ${name}`;
}

// TypeScript 允许在函数参数中使用可选参数（?）和默认值。
// age?: number 表示 age 参数是可选的。
// 如果没有传递 age 参数，默认值是 undefined，函数体内通过 age || "unknown" 来处理。
function greetA(name: string, age?: number): string {
  return `Hello, ${name}. You are ${age || "unknown"} years old.`;
}

/**
 * 函数的类型注解
 * TypeScript 支持为函数声明提供完整的类型注解，包括参数类型和返回值类型
 * : (a: number, b: number) => number 是函数类型注解，
 * 表示 multiply 是一个接收两个 number 类型参数并返回一个 number 类型结果的函数。。
 */
let multiply: (a: number, b: number) => number = (a, b) => a * b;