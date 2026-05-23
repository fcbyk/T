/**
 * 接口与类的结合(和Java类似)
 * 接口在 TypeScript 中与类的结合非常常见。类可以实现（implements）接口，以确保类遵守接口所定义的结构。
 * EmployeeA 类实现了 Person 接口，类必须提供接口中声明的所有属性和方法（如果有的话）。
 * 通过 implements 关键字来让类实现接口。
 * 类也可以实现多个接口，这样它可以同时遵守多个接口的结构。
 */
class EmployeeA implements Person {
  constructor(
    public name: string,
    public age: number,
    public jobTitle: string,
    public id: number
  ) {}

  getDetails(): string {
    return `${this.name}, ${this.age} years old, ${this.jobTitle}`;
  }
}

let employeeA = new EmployeeA("Alice", 30, "Software Engineer", 1);
console.log(employeeA.getDetails());