/**
 * 函数是对象
 * 在 JS 中函数也是对象,可以用变量接收
 * 函数是Function构造函数创建的实例
 */

// 使用 Function 构造函数创建函数
let functionObject = new Function("text", "console.log(text)");
functionObject('在 JS 中函数也是对象');
console.log(typeof functionObject); //function

