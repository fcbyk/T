/**
 * 联合类型（Union Types）
 * 通过 |，你可以让一个变量同时支持多种类型，这种类型叫做联合类型。
 * string | number 表示 value 可以是字符串类型或数字类型。
 */
let value: string | number;
value = "Hello";
value = 42;


/**
 * 字面量类型（Literal Types）
 * 字面量类型允许你指定变量只能是某些特定的值，这是一种更精确的类型注解。
 * color 只能是 "red"、"green" 或 "blue" 中的一个值。
 */
let color: "red" | "green" | "blue" = "red";