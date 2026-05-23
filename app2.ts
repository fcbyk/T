/**
 * 接口可以描述函数
 * 接口不仅可以用于描述对象的结构，还可以用来描述函数的类型。通过接口来定义一个函数的签名（即参数类型和返回值类型）。
 */
interface Greet {
  (name: string): string;
}
const greet: Greet = (name) => {
  return `Hello, ${name}`;
};
