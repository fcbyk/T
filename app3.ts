/**
 * declare 关键字
 * declare 是 TypeScript 中的一个特殊关键字，用于声明变量、函数、类、模块或命名空间等的类型，而不需要提供具体的实现代码。
 * 它主要用于告知 TypeScript 编译器某些变量或模块已经存在，它们的类型是什么，而无需在代码中实现这些元素。
 */

// 声明一个全局变量
declare var myGlobalVar: string;

// 声明一个全局函数
declare function add(a: number, b: number): number;

// 声明一个类
declare class Person {
  name: string;
  age: number;

  constructor(name: string, age: number);

  greet(): void;
}

// 声明一个外部模块
declare module "math-lib" {
  export function add(a: number, b: number): number;
  export function subtract(a: number, b: number): number;
}

// 声明命名空间
declare namespace Utils {
  function calculateSum(a: number, b: number): number;
  function calculateDifference(a: number, b: number): number;
}

// declare 不能用来提供值的实现
// declare const x = 10;  // 错误