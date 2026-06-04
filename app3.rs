// === Trait Bound（约束） ===
//
// <T: Trait> 意思是"T 必须实现了某个 trait"。
// 用于泛型函数和泛型结构体的限制条件。

use std::fmt::Display;

// —— 写法一：<T: Trait> ——
fn notify<T: Summary>(item: &T) {
    println!("通知: {}", item.summarize());
}

// —— 写法二：多个约束用 + 连接 ——
fn debug_notify<T: Summary + Display>(item: &T) {
    println!("debug_notify: {item}");        // Display → {}
    println!("  {}", item.summarize());       // Summary
}

// —— 写法三：where 子句（约束多时更可读） ——
fn complex<T, U>(t: &T, u: &U)
where
    T: Summary + Display,
    U: Clone + Display,
{
    println!("t = {t}, u = {u}");
}

// trait 定义（复用 app2 的）
trait Summary {
    fn summarize(&self) -> String;
}

impl Summary for String {
    fn summarize(&self) -> String {
        self.clone()
    }
}

fn main() {
    let s = String::from("一段摘要");

    notify(&s);
    debug_notify(&s);
    complex(&s, &String::from("另一个值"));
}
