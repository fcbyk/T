/**
 * 标识符与变量
 * JS的标识符由字母、数字、$、_ 组成
 */

// 变量的声明
(() => {
    // 语法：let(关键字) 变量名
    // 注意不用写数据类型
    let age
    let n, f 	//可以同时声明多个变量
    var a 		//不同的关键字定义变量
})();


// 变量的赋值
(() => {
    //使用赋值运算符进行赋值
    let str 
    str = 'hello world!' 
    let str1 = 'hello world!'	//声明和赋值同时进行
    let a1 = 2, a2 = 3
})();


// 弱类型特性
(() => {
    //在 JS 中变量类型由所引用的值决定
    var web = "hdcms"
    console.log(typeof web) //string
    web = 99;
    console.log(typeof web) //number
    web = {};
    console.log(typeof web) //object
})();


// 变量关键字 var let const
(() => {
    //var 没有块作用域概念，很容易污染全局
    //let const 拥有块作用域
    //const 用来声明常量
    var a = 100
    let b = 100
    const c = 100
})();