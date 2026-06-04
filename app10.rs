// === Rust 类型别名 ===
//
// type 关键字为已有类型起别名，不创建新类型。
// 常用于语义化命名（type Score = u32）或简化复杂类型签名。

type Score = u32;

fn main() {
    let my_score: Score = 95;

    // Score 就是 u32，可以互相赋值
    let x: u32 = my_score;

    println!("my_score(Score) = {my_score}");
    println!("赋值给 u32: {x}");
}
