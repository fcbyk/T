/**
 * <reference> 标签
 * /// <reference> 标签是 TypeScript 提供的一种特殊的注释指令，
 * 通常用于引入外部的类型声明文件（.d.ts 文件）、类型库或为 TypeScript 编译器提供额外的类型信息。
 * 它的作用是在文件间建立依赖关系，确保 TypeScript 能正确解析类型。
 * 这些标签只对 TypeScript 编译器有意义，不会出现在编译后的 JavaScript 代码中。
 * /// <reference> 标签必须放在文件的开头，并且在所有导入语句之前
 * 这些标签不会影响 JavaScript 的运行时行为，只用于 TypeScript 编译时的类型检查和代码补全。
 * 在使用 ES 模块化的项目中，/// <reference> 标签通常不必要，推荐通过模块导入（import/export）和 tsconfig.json 配置来管理类型依赖。
 */

/**
 * 语法
 * /// <reference directive="value" />
 * directive 是具体的指令，比如 path、types 或 lib。
 * value 是该指令的值，指示编译器如何处理。
 */

/**
 * path 指令
 * 用于引用指定路径的声明文件（.d.ts）。
 * 一般用于项目内部文件间的类型引用。
 */
// 这会告诉 TypeScript 编译器加载 ../files/type.d.ts 文件中的类型声明。
// 通过 /// <reference path="..." /> 引入类型定义，而不需要显式导出。
/// <reference path="../files/type.d.ts" />

/**
 * types 指令
 * 用于加载全局类型声明，通常是通过 npm 安装的库的类型定义（如 @types 包）。
 * 适用于加载外部模块或工具库的类型信息。
 */
// 这表示引入 node 和 lodash 的类型定义文件，前提是已通过 npm 安装了这些类型包。
/// <reference types="node" />
/// <reference types="lodash" />


/**
 * lib 指令
 * 用于加载标准库的类型定义（如 DOM、ES2015）。
 * 通常用于指定要引入的标准库功能。
 */
// 这会告诉 TypeScript 编译器加载 ECMAScript 2015 和 DOM 的类型定义，适合开发使用这些标准库 API 的项目。
/// <reference lib="es2015" />
/// <reference lib="dom" />
