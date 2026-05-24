/**
 * arguments 对象
 * 在普通函数中，arguments 是一个类数组对象，包含所有传入的参数
 * 箭头函数没有 arguments 对象
 */

// 使用 arguments 获取所有参数
(() => {
    function sum() {
        console.log(arguments);  // Arguments 对象
        console.log(arguments.length);  // 参数个数
        
        let total = 0;
        for (let i = 0; i < arguments.length; i++) {
            total += arguments[i];
        }
        return total;
    }
    
    console.log(sum(1, 2, 3, 4, 5));  // 15
})();

// arguments 不是真正的数组
(() => {
    function test() {
        console.log(Array.isArray(arguments));  // false
        console.log(arguments instanceof Array);  // false
        
        // 转换为真正的数组
        let args = Array.from(arguments);
        console.log(Array.isArray(args));  // true
    }
    test(1, 2, 3);
})();
