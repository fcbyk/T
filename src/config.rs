// === 配置模块：演示 struct + 模块 ===
pub struct AppConfig {
    pub name: String,
    pub version: String,
}

impl AppConfig {
    pub fn default() -> Self {
        AppConfig {
            name: String::from("demo118"),
            version: String::from("0.1.0"),
        }
    }
}
