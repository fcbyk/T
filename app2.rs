// === Rust 闭包（匿名函数）与嵌套函数 ===
//
// 闭包语法：|参数| 函数体
// 闭包能捕获外层作用域的变量，嵌套 fn 不能。

fn main() {
    // —— 基本闭包（单表达式，可省略 {}） ——
    let add_one = |n: i32| n + 1;
    println!("add_one(5) = {}", add_one(5));

    // 省略类型
    let multiply = |a, b| a * b;
    println!("multiply(3, 4) = {}", multiply(3, 4));

    // —— 多语句闭包（必须加 {}） ——
    let f = |x: i32| {
        let doubled = x * 2;
        println!("多行闭包: doubled = {doubled}");
        doubled + 1 // 最后一个表达式的值 = 返回值
    };
    println!("结果 = {}", f(3));

    // —— 立即执行闭包（IIFE） ——
    let y = (|a: i32, b: i32| a + b)(3, 4);
    println!("IIFE: {y}");

    // —— 闭包捕获外层变量 ——
    let prefix = "hello";
    let greet = |name: &str| println!("{}, {}", prefix, name);
    greet("world"); // 闭包能直接用 prefix

    // —— 嵌套 fn（不能捕获外层变量） ——
    fn inner(n: i32) -> i32 {
        n + 1 // 不能访问外层变量，编译会报错
    }
    println!("嵌套 fn: {}", inner(10));
}
