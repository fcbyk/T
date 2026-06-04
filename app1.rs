// === match 基础 ===
//
// match 是 Rust 的模式匹配，类似其他语言的 switch，但强很多：
//   1. 每个分支叫"臂"（arm）：模式 => 表达式
//   2. match 是表达式，能返回值
//   3. 穷尽性检查：编译器确保所有情况都已覆盖

fn main() {
    // —— 基础 match ——
    let num = 3;
    let desc = match num {
        1 => "一",
        2 => "二",
        3 => "三",
        _ => "其他", // _ 是通配符，匹配"剩下的所有情况"
    };
    println!("{num} = {desc}");

    // —— 多值匹配 ——
    let code = 'x';
    match code {
        'a' | 'b' | 'c' => println!("a～c"),
        'x' | 'y' | 'z' => println!("x～z"),
        _ => println!("其他字符"),
    }

    // —— 范围匹配 ——
    let age = 25;
    match age {
        0..=17 => println!("未成年"),
        18..=64 => println!("成年人"),
        _ => println!("老年人"),
    }

    // —— match 守卫（if 条件） ——
    let n = Some(8);
    match n {
        Some(x) if x > 5 => println!("大于 5: {x}"),
        Some(x) => println!("不大于 5: {x}"),
        None => println!("空的"),
    }
}
