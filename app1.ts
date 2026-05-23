/**
 * 类型别名（Type Aliases）
 * TypeScript 允许你使用 `type` 关键字定义类型别名，便于为复杂的类型创建简洁的名称。
 * type 可以用来定义联合类型、交叉类型、元组类型等。
 */

type Name = string;
let personName: Name = "Alice"; // 这里 Name 是 string 的别名