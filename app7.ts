/**
 * 接口合并（Declaration Merging）
 * TypeScript 的接口支持声明合并（Declaration Merging），意味着你可以在不同地方定义同一个接口，TypeScript 会将它们合并成一个接口。
 */
interface Person {
  name: string;
}

interface Person {
  age: number;
}

// 两个 Person 接口会合并成一个，最终的接口有 name 和 age 两个属性。
const personD: Person = {
  name: "Alice",
  age: 30,
};

