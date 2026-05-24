/**
 * module 对象
 * 每个文件在 Node.js 中都拥有一个 module 对象
 * 这个对象用于管理模块的导出、模块的名称、模块的文件路径等信息。
 */

/**
 * module.exports 是一个关键属性
 * 允许你导出模块的内容。在 Node.js 中，当你通过 require 引入一个模块时，返回的就是 module.exports 对象的内容。
 */
module.exports.add = function(a, b) {
    return a + b;
  };
  
module.exports.subtract = function(a, b) {
    return a - b;
};

// 这里覆盖了之前的导出
module.exports = {
    // 新的导出内容
};

/**
 * 其他常用属性
 */
console.log(module.filename); // 输出当前文件的完整路径
console.log(module.id); // 输出当前模块的唯一标识符