/**
 * 函数类型别名
 */
type Greet = (name: string) => string;

const greet: Greet = (name) => {
  return `Hello, ${name}`;
};