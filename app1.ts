/**
 * 命名空间是 TypeScript 用来组织代码的一种方式，可以帮助你将相关的功能封装在一个逻辑上隔离的块中，避免全局作用域污染。
 */

// 定义命名空间
// 在命名空间中，只有使用 export 关键字标记的成员才会暴露给外部使用。如果没有使用 export，它们将仅在命名空间内部可用。
namespace MyNamespace {
  export const myVariable = "Hello, Namespace!";

  export function greet(name: string): string {
    return `Hello, ${name}!`;
  }

  export class Person {
    constructor(public name: string) {}
    greet() {
      return `Hi, I am ${this.name}`;
    }
  }

  // 命名空间（namespace）在 TypeScript 中不仅可以包含代码实现，还可以用于仅声明类型（如接口、类型别名、类等）。
  // 声明接口
  export interface Student {
    name: string;
    age: number;
  }

  // 声明类型别名
  export type Greeting = string;
}

// 访问命名空间内的内容
console.log(MyNamespace.myVariable); // 输出 'Hello, Namespace!'
console.log(MyNamespace.greet("Alice")); // 输出 'Hello, Alice!'

const person = new MyNamespace.Person("Bob");
console.log(person.greet()); // 输出 'Hi, I am Bob'

// 使用命名空间内的类型
let hello:MyNamespace.Greeting = "hello";
let stu:MyNamespace.Student = {
  name:"张三",
  age:20
}