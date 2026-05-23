/**
 * .d.ts 文件 (Type Declaration File)
 * 声明文件，用于为 JavaScript 代码提供类型信息，通常用于第三方库的类型定义，或者为全局变量、模块等提供类型声明。
 * .d.ts 文件本身并不包含实际的代码实现，它只声明类型和接口。
 */

declare module "my-library" {
  export function myFunction(param: string): string;
}
