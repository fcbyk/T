/**
 * 箭头函数
 * ES6 允许使用箭头=>定义函数
 * 箭头函数是函数声明的简写形式
 * 在使用递归调用、构造函数、事件处理器时不建议使用箭头函数
 */

// 基本箭头函数
let getSum = (num1, num2 = 10) => { 
    console.log(num1 + num2) 
}
getSum(5);  // 15


// 无参数时使用空括号
let sum = () => { 
    return 1 + 3 
}
console.log(sum());  // 4


// 函数体只有一条语句可以省略{}
// 没有{}，需要省略return，系统会自动返回表达式计算结果
getSum = (num1, num2=20) => console.log(num1 + num2);
getSum(10);  // 30

sum = () => 1 + 3;
console.log(sum());  // 4


// 只有一个参数时可以省略括号
let doubleNum = num => num*2;
console.log(doubleNum(5));  // 10

