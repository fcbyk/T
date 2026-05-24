/**
 * 函数提升
 * 在 JavaScript 中，函数声明会被提升到其所在作用域的顶部
 * 这意味着你可以在函数定义之前调用这个函数
 * 这与大多数其他编程语言中的行为有所不同
 */

// 函数提升示例
(() => {
    // 可以在函数定义之前调用
    hello()
    
    function hello(){
        console.log("hello world")
    }
})();

// 函数表达式不会被提升
(() => {
    // 这里会报错：Cannot access 'hello' before initialization
    // hello()
    
    let hello = function(){
        console.log("hello world")
    }
    
    // 必须在定义之后调用
    hello()
})();
