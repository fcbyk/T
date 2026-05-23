/**
 * 类型注解与类型推断
 * TypeScript 有强大的 类型推断 功能，它可以根据你赋值给变量的值来自动推断该变量的类型。
 * 因此，许多时候你可以省略类型注解，TypeScript 会自动推断类型。
 */
let nu = 42; // TypeScript 推断 nu 的类型为 number
let st = "Hello, World!"; // TypeScript 推断 st 的类型为 string
