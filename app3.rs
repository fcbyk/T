// === Rust 枚举 ===
//
// enum 不是简单的"一组数字常量"。
// Rust 的 enum 每个变体（variant）可以携带不同类型的数据。
// 可以理解为"带标签的联合体"（tagged union / sum type）。

// 简单枚举：每个变体不带数据
#[allow(dead_code)]
#[derive(Debug)]
enum Status {
    Active,
    Inactive,
    Suspended,
}

// 带数据的枚举：每个变体可以存不同类型
#[allow(dead_code)]
#[derive(Debug)]
enum Message {
    Quit,                        // 无数据
    Move { x: i32, y: i32 },     // 具名字段（像 struct）
    Write(String),               // 单个值
    ChangeColor(u8, u8, u8),     // 元组风格
}

fn main() {
    // —— 简单枚举 ——
    let s = Status::Active;
    println!("status = {s:?}");

    // —— 带数据的枚举 ——
    let msg1 = Message::Quit;
    let msg2 = Message::Move { x: 10, y: 20 };
    let msg3 = Message::Write(String::from("hello"));
    let msg4 = Message::ChangeColor(255, 128, 0);

    println!("msg1 = {msg1:?}");
    println!("msg2 = {msg2:?}");
    println!("msg3 = {msg3:?}");
    println!("msg4 = {msg4:?}");

    // 枚举变体的值通过 match 取出（详见模式匹配 demo）
    // 这里只看定义和构造
}
