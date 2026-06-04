// === 读取并修改 run.byk.json ===
//
// 不需要显式 use serde::Serialize — serde_json 内部已有。

use std::collections::HashMap;

// 类型别名：别名配置就是 key → value 的映射
type AliasConfig = HashMap<String, String>;

// 读取 run.byk.json，追加一条别名，写回文件
pub fn add_alias() {
    // 1. 读取文件内容
    let content = std::fs::read_to_string("run.byk.json")
        .expect("读取 run.byk.json 失败");

    // 2. 反序列化为 HashMap
    let mut aliases: AliasConfig = serde_json::from_str(&content)
        .expect("解析 JSON 失败");

    // 2.5 先输出当前内容
    println!("当前 run.byk.json: {:#?}", aliases);

    // 3. 追加一条别名
    aliases.insert(
        "hello".to_string(),
        "echo hello serde_json".to_string(),
    );

    // 4. 序列化回 JSON（带缩进）
    let new_json = serde_json::to_string_pretty(&aliases)
        .expect("序列化失败");

    // 5. 写回文件
    std::fs::write("run.byk.json", new_json)
        .expect("写入 run.byk.json 失败");

    println!("\n追加后 run.byk.json: {aliases:#?}");
}
