---
[package]
edition = "2024"
---

/**
 * const
 * 声明常量变量
 * 常量变量在编译时确定，类型固定，值不能改。
 */
fn main() {
    const MAX_SPEED: u32 = 100;
    const PI: f64 = 3.14159;

    println!("MAX_SPEED = {}", MAX_SPEED);
    println!("PI = {}", PI);

    // MAX_SPEED = 200; // 编译错误，常量不能修改

    global_const();
    const_life();
}

/**
 * 全局常量
 * const 可以定义在全局作用域
 * 习惯全大写命名
 */
const VERSION: &str = "1.0.0";

fn global_const() {
    println!("VERSION = {}", VERSION);
}

/**
 * const 的生命周期
 * const 在编译期被内联到使用处，没有运行时生命周期
 * 编译后就不存在了，相当于直接替换成字面量
 */
fn const_life() {
    // 这两行编译后等价于 println!("{}", 3000);
    const TIMEOUT: u64 = 3000;
    println!("TIMEOUT = {}", TIMEOUT);

    // const 不受作用域限制，编译期就已确定
    {
        const LOCAL_CONST: i32 = 42;
        println!("inner = {}", LOCAL_CONST);
    }
    // LOCAL_CONST 在运行时不占内存，自然不存在释放问题
    // 但同一块作用域内不能再次定义同名 const
}

/**
 * const vs let
 * const: 编译时确定，可定义在全局作用域
 * let: 运行时确定，只能在局部作用域
 */
fn const_vs_let() {
    // const 必须在声明时标注类型
    const TIMEOUT: u64 = 3000;

    // let 可以类型推断
    let x = 5;

    // const 必须是编译期能确定的值
    // const NOW: u64 = std::time::SystemTime::now()
    //     .duration_since(std::time::UNIX_EPOCH)
    //     .unwrap()
    //     .as_secs(); // 编译错误，不能是函数返回值
}
