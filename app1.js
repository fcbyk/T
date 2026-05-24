/**
 * 算术运算符
 * 加减乘除，取余
 */
function arithmetic(a = 5, b = 3) {
    console.log(a + b); //8
    console.log(a - b); //2
    console.log(a * b); //15
    console.log(a / b); //1.6666666666666667
    console.log(a % b); //2
};

arithmetic();

/**
 * 指数运算符(ES7)
 * 在 ES7 中引入指数运算符 **，用来实现幂运算
 * 功能与 Math.pow(a, b) 结果相同
 */
function exponent() {
    console.log(2 ** 10);	// 1024
    console.log(Math.pow(2, 10));
}

exponent();