---
[package]
edition = "2024"
---
// 声明 Rust Edition，去除警告

/**
 * Rust 必须有 main 函数作为入口
 * 不能在顶层直接写执行代码
 * 
 * Rust 顶层只能放：
 * 函数定义 fn
 * 常量 const
 * 全局变量 static
 * 结构体、枚举、trait 等类型定义
 */
fn main() {
    println!("Hello, world!");
}