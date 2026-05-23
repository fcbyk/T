/**
 * 对象类型别名
 * 类型别名与接口的对比
 * 接口（Interface） 主要用于定义对象、类和函数的结构，支持接口继承和扩展。
 * 类型别名（Type Alias） 更加灵活，除了支持对象、函数类型外，还支持联合类型、交叉类型、元组类型等。
 */
type Person = {
  name: string;
  age: number;
};

const user: Person = {
  name: "Alice",
  age: 30,
};
