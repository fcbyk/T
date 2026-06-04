// === Rust → Python：投递命令，各自输出 ===
//
// Rust 只负责把命令塞给 Python，然后立刻退出。
// Python 继承终端 stdout/stderr，直接输出，不经过 Rust 管道。
// 异常、日志全在终端，Rust 不需要等状态码。

use std::io::Write;
use std::process::{Command, Stdio};

pub fn call() {
    let mut child = Command::new("python3")
        .arg("plugin_fire.py")
        .stdin(Stdio::piped())         // 只建 stdin 管道（写入命令）
        // 不设 stdout/stderr → 继承终端，直接输出
        .spawn()
        .expect("Python 环境缺失，无法启动");

    let request = r#"{"cmd": "echo hello from python"}"#;
    child.stdin
        .as_mut()
        .unwrap()
        .write_all(request.as_bytes())
        .unwrap();

    // stdin 关闭 → Python 收到 EOF，开始执行
    // Rust 立刻退出，不等结果
    drop(child.stdin.take());

    println!("命令已投递，Rust 退出");
}
