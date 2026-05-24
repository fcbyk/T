/**
 * 高阶函数 - 接受函数作为参数
 * 在 JavaScript 中，函数是一等公民
 * 可以像其他对象一样被传递、赋值和作为参数传递给其他函数
 * 高阶函数是指能够接受其他函数作为参数，或者将函数作为返回值输出的函数
 */

// 接受函数作为参数
function operate(func, a, b) {
    return func(a, b);
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

console.log(operate(add, 5, 3)); // 输出 8
console.log(operate(subtract, 5, 3)); // 输出 2
