/**
 * 对象的类型注解
 * 对象的类型注解用来描述一个对象的结构，明确对象的每个属性的类型
 */
let p1: { name: string; age: number } = { name: "Alice", age: 30 };

// 接口（interface）
// 接口（interface）可以用来描述对象的结构，尤其是当多个对象具有相同的结构时，接口的使用使得类型注解更加简洁和可维护。
interface Person {
  name: string;
  age: number;
  skills?: string[];
}

let p2: Person = { name: "Alice", age: 30 };