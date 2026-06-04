// === 模块系统：mod / pub / use / Cargo ===
//
// src/main.rs — 二进制入口。use demo118::xxx 引用同项目的库 crate。

// 引用本项目的库（Cargo.toml 里的 name = "demo118"）
use demo118::run_a;
use demo118::run_b;
use demo118::config::AppConfig;
use demo118::command::parser;

// 引用标准库（不需要 Cargo.toml，编译器和标准库绑在一起）
use std::collections::HashMap;

fn main() {
    // 用 lib.rs 里重新导出的函数
    run_a();
    run_b();

    // 用 config 模块
    let cfg = AppConfig::default();
    println!("{} v{}", cfg.name, cfg.version);

    // 用命令解析器
    let args = parser::parse("rustc app1.rs -o target/app1");
    println!("解析结果: {args:?}");

    // 标准库路径：std::collections::HashMap
    let mut map: HashMap<&str, i32> = HashMap::new();
    map.insert("app1", 1);
    println!("HashMap: {map:?}");
}
