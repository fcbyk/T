# demo118 Rust 模块与包管理

### mod 和 use 是两件事

`mod config;` 声明模块存在（编译器找 `src/config.rs`），不声明模块根本不存在。`use demo118::run_a;` 纯粹是把长路径缩短，方便调用。

### pub 和 pub use

默认一切私有。`pub fn` 才对外可见。`pub use` 是重新导出——把深层子模块的东西拉到上层，外部调用方不需要知道内部结构。

### Cargo.toml 和外部 crate

项目根就是 crate。`[dependencies]` 段引入第三方库（如 `cargo add serde`），二进制入口是 `main.rs`，库入口是 `lib.rs`。引用标准库（`std::`）不需要配置，编译器自带。
