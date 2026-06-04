// === serde 序列化基础 ===
//
// #[derive(Serialize, Deserialize)] 一行搞定结构的 JSON/TOML 互转。
// serde 是 Rust 事实标准，bykcli 配置文件全用它。

// use {A, B} = 一次导入多个，
// 等价 use serde::Serialize; use serde::Deserialize;
use serde::{Serialize, Deserialize}; 


// 只要 derive 两个 trait，结构体就能序列化/反序列化
#[derive(Debug, Serialize, Deserialize)]
struct AppConfig {
    name: String,
    version: String,
    port: u16,
}

#[derive(Debug, Serialize, Deserialize)]
struct Database {
    url: String,
    pool_size: u32,
}

// 嵌套结构体也可以
#[derive(Debug, Serialize, Deserialize)]
struct FullConfig {
    app: AppConfig,
    database: Database,
}


pub fn run(){
    // —— 序列化为 JSON ——
    let config = FullConfig {
        app: AppConfig {
            name: "bykcli".into(),
            version: "2.0.0".into(),
            port: 8080,
        },
        database: Database {
            url: "postgres://localhost/bykcli".into(),
            pool_size: 10,
        },
    };

    let json = serde_json::to_string_pretty(&config).unwrap();
    println!("JSON:\n{json}");

    // —— 从 JSON 反序列化 ——
    let parsed: FullConfig = serde_json::from_str(&json).unwrap();
    println!("\n反序列化: {parsed:?}");

    // —— 序列化为 TOML（bykcli 配置格式） ——
    let toml_str = toml::to_string_pretty(&config).unwrap();
    println!("\nTOML:\n{toml_str}");

    // 从 TOML 反序列化
    let from_toml: FullConfig = toml::from_str(&toml_str).unwrap();
    println!("从 TOML 还原: {from_toml:?}");
}
