/**
 * 高阶函数 - 返回函数作为结果
 * 高阶函数可以根据条件或输入的不同返回不同的函数
 * 从而延迟计算或实现某种特定的行为
 */

// 返回函数作为结果
(() => {
    function multiplier(factor) {
        return function(num) {
            return num * factor;
        };
    }
    
    let double = multiplier(2);
    console.log(double(5)); // 输出 10
    
    let triple = multiplier(3);
    console.log(triple(5)); // 输出 15
})();

// 使用箭头函数简化
(() => {
    const multiplier = (factor) => (num) => num * factor;
    
    const double = multiplier(2);
    console.log(double(5)); // 输出 10
    
    const triple = multiplier(3);
    console.log(triple(5)); // 输出 15
})();
