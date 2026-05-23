/**
 * 交叉类型（Intersection Types）
 * 交叉类型允许将多个类型合并成一个类型。类型别名非常适合用来定义交叉类型。
 */
type Person = {
  name: string;
  age: number;
};

type WorkerA = {
  jobTitle: string;
};

type Employee = Person & WorkerA; // 交叉类型，合并 Person 和 WorkerA

const emp: Employee = {
  name: "Alice",
  age: 30,
  jobTitle: "Software Engineer",
};
