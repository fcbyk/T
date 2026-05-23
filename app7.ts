/**
 * any 类型
 * any 类型表示可以接受任意类型的值。虽然 any 可以绕过类型检查，但过度使用 any 会丧失 TypeScript 的类型安全性，因此应谨慎使用。
 */
let valueA: any = "Hello";
valueA = 42;  // 仍然有效，类型可以是任何类型


/**
 * unknown 类型
 * unknown 类型是比 any 更安全的类型，表示未知类型的值。与 any 类型不同，unknown 类型的值不能直接进行操作，必须先进行类型检查。
 * 必须先进行类型检查或类型断言后才能操作 unknown 类型的变量。
 */
let valueC: unknown = "Hello";
// value.toUpperCase();  // 错误：类型 'unknown' 的对象不能执行 'toUpperCase' 操作


/**
 * 类型断言（Type Assertion）
 * 类型断言允许你告诉 TypeScript 你知道变量的类型是什么，从而绕过类型检查。
 */
let valueD: unknown = "Hello, TypeScript!";
let strA: string = valueD as string;  // 类型断言，告诉 TypeScript valueD 是 string 类型