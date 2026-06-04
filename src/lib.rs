// === 库 crate：pub mod 对外暴露，pub use 重新导出 ===
//
// src/lib.rs — 库根。cargo build 时编译成 libdemo118.rlib。
// 外部通过 demo118::xxx 访问这里 pub 出来的东西。
// pub use 可以重新导出（re-export），对外隐藏内部模块结构。

pub mod config;     // src/config.rs
pub mod command;    // src/command.rs

// 重新导出：外部用 demo118::run_a() 而不是 demo118::command::exec::run_a()
pub use command::exec::run_a;
pub use command::exec::run_b;
