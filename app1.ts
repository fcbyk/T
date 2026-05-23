/**
 * 接口（Interfaces）
 * 接口（Interface） 是 TypeScript 中的一个核心特性，它用于定义对象、类、函数等的结构（即它们的属性和方法）。
 * 接口通过规定结构和类型来帮助开发者约束代码的行为，确保在使用时对象符合某个预定的结构。
 * 与类型别名（type）类似，接口也能够描述数据的形状，但接口在 TypeScript 中更专注于面向对象的设计，且它具有一些额外的功能，比如可以扩展（继承）其他接口。
 */

export interface Person {
  name: string;
  age: number;

  // 在接口中，某些属性可以是可选的。使用 ? 来标记这些属性为可选。
  address?: string;

  // 接口中的属性可以是只读的，意味着它们在对象创建后不能被修改。使用 readonly 关键字标记只读属性。
  readonly id?: number;
}

let person: Person = { id: 1, name: "Alice", age: 30 };
person.name = "Bob"; // 允许修改
person.age = 35; // 允许修改
// person.id = 2; // 错误：无法修改 readonly 属性