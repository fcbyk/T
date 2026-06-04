// === Rust 类型转换 ===
//
// as        → 基本数值类型间的显式转换（截断，不 panic）
// From<T>   → 通用的"从 T 构造"转换
// Into<T>   → From 的反向，实现了 From 自动获得 Into
//
// 默认类型：
//   整数 → i32
//   浮点 → f64

fn main() {
    // as 转换（截断高位 / 截断小数）
    let a: i32 = 300;
    let b = a as u8;          // 300 % 256 = 44
    let c = 3.14f64 as i32;   // 3

    // From trait（&str → String）
    let s = String::from("hello");

    // 字面量默认类型
    let int = 42;             // i32
    let float = 3.14;         // f64

    println!("300i32 as u8 = {b}");
    println!("3.14f64 as i32 = {c}");
    println!("s = {s}");
    println!("int(i32) = {int}, float(f64) = {float}");
}
