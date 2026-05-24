/**
 * 函数的定义
 * JavaScript 中函数有多种定义方式
 */

// 函数的普通定义（函数声明）
function fun1() { 
    console.log("函数声明")
}
fun1();


// 使用变量接收函数（函数表达式）
let fun2 = function () {
    console.log("函数表达式")
}
fun2();


// 立即执行匿名函数
// 立即执行函数指函数定义时立即执行
(() => {
    console.log("立即执行函数")
})();
