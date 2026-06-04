// === match 进阶：守卫、绑定、引用匹配 ===
//
// 几个不常用但看到代码时要知道的语法。

fn main() {
    // —— match 守卫（if 条件更复杂时） ——
    let pair = (2, -5);
    match pair {
        (x, y) if x == y => println!("相等"),
        (x, y) if x + y == 0 => println!("互为相反数"), // (2, -5) 匹配这里
        _ => println!("不特殊"),
    }

    // —— @ 绑定：匹配的同时给整个子值起名 ——
    let age = Some(18);
    match age {
        Some(n @ 1..=17) => println!("未成年人: {n}"), // n 就是匹配到的值
        Some(n) => println!("成年人: {n}"),
        None => println!("未知"),
    }

    // —— ref：匹配时借用而不是移动 ——
    // 默认 match 会移动值。加上 ref 就借用。
    let name = Some(String::from("hello"));

    match name {
        Some(ref s) => println!("借用: {s}"), // &String，所有权不变
        None => println!("None"),
    }
    // name 依然可用，因为是借用
    println!("name 还能用: {name:?}");

    // 等价写法：在匹配之前先取引用
    match &name {
        Some(s) => println!("借用: {s}"), // 自动变成 &String
        None => println!("None"),
    }
    println!("name 还能用: {name:?}");
}
