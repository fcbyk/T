// === 模块可以是目录：src/command/mod.rs ===
//
// 当模块变大，拆成目录比单文件更好维护。
// 每个子模块一个文件，mod.rs 负责声明和重新导出。

// 声明子模块（编译器找 src/command/exec.rs 和 src/command/parser.rs）
pub mod exec;
pub mod parser;

// 也可以直接把子模块的内容拿出来重新导出
pub use parser::parse;
