/**
 * 动态导入
 * 使用 import() 函数来按需加载 JavaScript 模块
 * 它返回一个 Promise，支持异步操作，可以使用 then() 或 async/await 语法
 * 动态导入非常适合用于 懒加载、代码拆分 和 条件加载
 * 它允许你在应用中实现更精细的模块加载策略，从而提高页面的加载速度和性能
 */
const loadFeature = async () => {
    const featureModule = await import('./feature.js');
    featureModule.init();
}

// 动态导入的路径可以是一个变量，允许你动态选择需要加载的模块。这使得导入路径更加灵活：
const moduleName = './math.js';
import(moduleName).then(module => {
  console.log(module.add(2, 3));
});


/**
 * 文件后缀
 * 在 ESM（ECMAScript Modules） 模块导入中，必须指定文件的后缀，包括 .js 后缀，尤其是在浏览器环境中
 * 在 Node.js 中，默认情况下，不需要 指定 .js 后缀，尤其是当你使用 ESM 模块时（即 type: "module" 配置的情况下）。Node.js 会自动解析导入的模块文件，且在某些情况下可以省略 .js 后缀。
 * 对于 动态导入（import()）也是一样的要求，必须包括文件的后缀
 */