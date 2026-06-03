---
[package]
edition = "2024"
---

/**
 * let
 * 声明变量（默认不可变）
 * Rust 是 静态类型 语言，类型在编译期确定
 * let 支持类型推断，可以不写类型，但类型一旦确定就固定了
 */
fn main() {
    let x = 5;
    // x = 6; // 编译错误，x 是不可变的
    println!("x = {}", x);

    shadowing();
    life();
}

/**
 * 变量遮蔽
 * 用同名的 `let` 重新声明，新变量遮蔽旧变量
 * 遮蔽本质是创建了一个全新的变量，只是名字相同
 * 现象上像动态类型，本质仍是静态类型，类型安全从未被破坏
 */
fn shadowing() {
    let x = 5;
    println!("{x}"); // 5
    
    let x = "hello";  // 遮蔽，x 现在是 "hello"
    println!("{x}"); // hello
}

/**
 * let 变量的生命周期
 * let 只能写在 {} 块内，出了括号就释放
 */
fn life() {
    let x = 10;        // x_1
    println!("{x}");

    // x_2，遮蔽 x_1
    // x_1 此时不可访问，但还没释放
    let x = "hello world";  
    println!("{x}");
    
    {
        let y = 10; // 出了这个内层 {} 就释放，比 x 更早
        println!("{y}");
    } // y 已释放，x 还在
   
} // x_1 和 x_2 在这里一起释放
