// === Rust → Python：双向通信（stdin 请求 → stdout JSON 响应）===
//
// Rust 通过 stdin 发送 JSON 请求，Python 处理后通过 stdout 返回 JSON。
// stdout/stderr 被截获，终端看不到 Python 的输出。

use std::io::Write;
use std::process::{Command, Stdio};

pub fn call() {
    let mut child = Command::new("python3")
        .arg("plugin_echo.py")
        .stdin(Stdio::piped())
        .stdout(Stdio::piped())
        .stderr(Stdio::piped())
        .spawn()
        .expect("Python 不可用");

    let request = r#"{"command": "echo", "args": ["hello", "world"]}"#;
    if let Some(ref mut stdin) = child.stdin {
        stdin.write_all(request.as_bytes()).unwrap();
    }
    drop(child.stdin.take());

    let output = child.wait_with_output().unwrap();

    let code = output.status.code().unwrap_or(-1);
    println!("[双向通信] 退出码: {code}");

    let resp = String::from_utf8_lossy(&output.stdout);
    if !output.stderr.is_empty() {
        println!("[双向通信] stderr: {}", String::from_utf8_lossy(&output.stderr).trim());
    }
    println!("[双向通信] 返回: {}", resp.trim());
}
