// === HashMap<K, V>：键值映射 ===
//
// 对应 Python dict / JS Object。
// 需要 use std::collections::HashMap。
// 没有 {} 字面量语法（不像 JS: {key: val}），用 insert 加数据。

use std::collections::HashMap;

fn main() {
    // —— 创建 ——
    let mut scores = HashMap::new();
    scores.insert("语文", 90);
    scores.insert("数学", 85);

    // 从元组数组创建
    let map = HashMap::from([
        ("name", "张三"),
        ("city", "深圳"),
    ]);
    println!("scores = {scores:?}");
    println!("map = {map:?}");

    // —— 读取 ——
    // get 返回 Option<&V>
    let math = scores.get("数学");
    println!("数学: {math:?}"); // Some(85)

    let missing = scores.get("体育");
    println!("体育: {missing:?}"); // None

    // 遍历
    for (key, value) in &scores {
        println!("{key} → {value}");
    }

    // —— 更新 ——
    // 直接覆盖
    scores.insert("数学", 88);

    // entry：只在键不存在时插入
    scores.entry("英语").or_insert(75);   // 英语不存在，插入 75
    scores.entry("数学").or_insert(100);  // 数学已存在，不覆盖
    println!("更新后: {scores:?}");

    // —— 删除 ——
    scores.remove("语文");
    println!("删除后: {scores:?}");
}
