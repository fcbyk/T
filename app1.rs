// === Rust 函数基础 ===
//
// 函数体最后一个表达式就是返回值（不加分号）。加了分号就变成语句，返回 ()。

// 无参无返回值
fn greet() {
    println!("hello");
}

// 有参有返回值，-> 声明返回类型
fn add(a: i32, b: i32) -> i32 {
    a + b // 没有分号 = 返回值（表达式）
}

// return 一般只在提前返回时用
fn abs(x: i32) -> i32 {
    if x >= 0 {
        return x;
    }
    -x
}

fn main() {
    greet();
    println!("add(2, 3) = {}", add(2, 3));
    println!("abs(-5) = {}", abs(-5));

    // === 表达式 vs 语句 ===
    //
    // { ... } 是代码块表达式（block expression），不是匿名函数！
    // 块的值 = 最后一个表达式的值。

    let x = {
        let a = 1;  // 语句，返回 ()
        let b = 2;  // 语句，返回 ()
        a + b       // 表达式，没有分号 → 整个块 = 3
    };
    println!("代码块表达式的值: {x}");
}
