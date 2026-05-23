import { Person } from "./app1";

/**
 * 接口继承(支持多继承)
 * 接口可以继承自其他接口。继承可以让一个接口继承另一个接口的所有属性和方法，也可以在继承的基础上添加新的属性或方法。
 */
interface Address {
  street: string;
  city: string;
}

interface Employee extends Person, Address {
  jobTitle: string;
}

let employee: Employee = {
  id: 12,
  name: "Alice",
  age: 30,
  jobTitle: "Software Engineer",
  street: "123 Main St",
  city: "Wonderland",
};