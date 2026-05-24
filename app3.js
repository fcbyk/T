/**
 * 函数参数的数量
 * JavaScript的形参和实参数量可以不对应
 */

// 正常调用 - 形参和实参数量一致
let getSum = function(num1, num2) { 
    console.log(num1 + num2); 
}   
getSum(1, 2);   // 3


// 形参数量大于实参
// 未传值的形参为undefined，最终的结果就是 NaN
getSum(1);  // NaN (1 + undefined)

// 实参数量大于形参
// 多于的实参将忽略并不会报错
getSum(1, 2, 3);  // 3 (忽略第三个参数)

