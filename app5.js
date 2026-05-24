/**
 * 函数的返回值
 * 函数没有 return ，返回的值是 undefined
 */

// 没有 return 语句的函数
let getSum = function() { 
    // 没有 return 语句
}
console.log(getSum());  // undefined


// 有 return 语句的函数
getSum = (num1, num2) => { 
    return num1 + num2;
}
console.log(getSum(10, 20));  // 30
