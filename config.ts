/**
 * tsconfig.json 文件是 TypeScript 项目的配置文件，用于指定编译选项、包含和排除的文件、模块解析策略等。
 */

let tsconfig = {
  compilerOptions: {
    target: "esnext",
    module: "commonjs",
    strict: true,
  },
  include: ["src/**/*.ts"],
  exclude: ["node_modules"],
};
