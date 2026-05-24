/**
 * AMD（Asynchronous Module Definition）（2010年左右）
 * RequireJS 是一个 第三方库，用于在浏览器中实现 AMD（Asynchronous Module Definition） 模块加载规范
 */

/**
 * 一个简单的 AMD 模块
 * 'math' 是模块的名称（可选）。
 * [] 是该模块的依赖列表，在这个例子中没有任何依赖。
 * function() 是模块的工厂函数，返回一个包含 add 和 subtract 方法的对象。
 */
define("math", [], function () {
  return {
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
  };
});

// 定义一个依赖于 math 模块的模块
define("calculator", ["math"], function (math) {
  return {
    multiply(a, b) {
      return a * b;
    },
    divide(a, b) {
      return a / b;
    },
    addAndMultiply(a, b, c) {
      var sum = math.add(a, b);
      return math.multiply(sum, c);
    },
  };
});

/**
 * 配置 RequireJS
 *//*
require.config({
    baseUrl: 'js',  // 设置基础路径，相对当前 HTML 文件
    paths: {
        // 设置模块的路径
        math: 'libs/math',  // 对 math 模块进行路径映射
        calculator: 'libs/calculator'
    }
});

*//**
 * 使用 AMD 模块
 * 可以通过 require() 函数加载
 * AMD 模块默认是 局部的，即它们不会自动暴露到全局作用域中。其设计理念是为了避免全局命名空间的污染，并促进模块的封装性和独立性。
 */
require(["calculator"], function (calculator) {
  console.log(calculator.multiply(2, 3)); // 输出 6
  console.log(calculator.addAndMultiply(1, 2, 3)); // 输出 9
});

