# demo119 serde 序列化与文件读写

### 一行搞定序列化

`#[derive(Serialize, Deserialize)]` 贴在结构体上，JSON 和 TOML 互转就完成了。`serde_json::to_string_pretty()` 序列化，`serde_json::from_str()` 反序列化，嵌套结构体自动递归处理。

### Cargo.toml 依赖

```toml
[dependencies]
serde = { version = "1", features = ["derive"] }
serde_json = "1"
toml = "1"
```

`serde = { version, features }` 是扩展写法，当依赖除了"要用哪个版本"还需要额外配置时用。`features = ["derive"]` 启用 derive 宏。简写 `serde_json = "1"` 等价于 `serde_json = { version = "1" }`。

### 文件读写

`read_to_string` / `write` 覆盖 90% 场景。进阶用 `BufReader::lines()` 逐行读大文件，`Write` trait 统一往文件、内存 `Vec<u8>`、stdout 写入——同一个接口，不同目标。

### bykcli 场景

配置文件（TOML）读入 → `toml::from_str()` → 结构体 → 程序使用。这就是 bykcli 配置层的核心流程。
