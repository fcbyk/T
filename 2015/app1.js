/**
 * 命名导出 (named export)
 * 命名导出允许你导出一个或多个变量、函数或类，可以使用 export 关键字直接导出
 * 命名导出 允许你导出多个变量或函数，每个导出都要有一个名字。在导入时，你必须使用相同的名字来引用这些导出的内容
 */
// math.js

// 导出单个函数
export function add(a, b) {
  return a + b;
}

// 导出多个值
export const pi = 3.14159;
export class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  area() {
    return pi * this.radius * this.radius;
  }
}