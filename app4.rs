// === 常用标准库 Trait ===
//
// 这些是 Rust 代码里最常见的 trait，知道它们能帮你理解 90% 的库 API。

// Display：控制 {} 输出（给人看的）
// Debug：控制 {:?} 输出（给开发者看的）
// 一般用 #[derive(Debug)]，Display 手动实现。

use std::fmt;

struct User {
    name: String,
    age: u8,
}

impl fmt::Display for User {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}（{}岁）", self.name, self.age)
    }
}

// From / Into：类型转换
// 实现了 From<T>，就自动获得 Into<U>。
// String::from("hi") 就是 From<&str> for String 的实现。

#[allow(dead_code)]
#[derive(Debug)]
struct Celsius(f64);

impl From<f64> for Celsius {
    fn from(c: f64) -> Celsius {
        Celsius(c)
    }
}

// Clone / Copy：复制语义
// Clone：显式 .clone()（堆上有数据，深拷贝）
// Copy：隐式复制（栈上的简单值，如 i32 / bool / char）
// #[derive(Clone, Copy)] 常见组合

#[allow(dead_code)]
#[derive(Debug, Clone, Copy)]
struct Color {
    r: u8,
    g: u8,
    b: u8,
}

fn main() {
    // Display
    let user = User { name: String::from("张三"), age: 30 };
    println!("Display: {user}");

    // From / Into
    let temp: Celsius = 36.5.into();  // Into 不需要显式写类型名
    let temp2 = Celsius::from(100.0); // From 更明确
    println!("from: {temp:?}, into: {temp2:?}");

    // Clone vs Copy
    let c1 = Color { r: 255, g: 0, b: 0 };
    let c2 = c1;    // Copy：c1 仍然有效（栈上复制）
    let c3 = c1.clone(); // Clone：显式调用也行
    println!("c1={c1:?}, c2={c2:?}, c3={c3:?}");
}
