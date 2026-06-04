// === 进程管理 ===
//
// std::process::Command = 启动外部进程。
// .output() 截获输出，.status() 直通终端。

use std::process::Command;

mod plugin_echo; // 双向通信：stdin → Python → stdout JSON
mod plugin_fire; // 投递即走：stdin → Python，终端直接输出

// === 基础：.output() 截获 vs .status() 直通 ===
fn example() {
    // .output() — 输出被截获
    let output = Command::new("echo")
        .arg("hello from Rust")
        .output()
        .expect("执行 echo 失败");

    println!("echo 输出: {}", String::from_utf8_lossy(&output.stdout).trim());

    // .status() — 输出直通终端
    let status = Command::new("ls")
        .arg("-la")
        .status()
        .expect("执行 ls 失败");

    println!("ls 退出码: {}", status.code().unwrap_or(-1));
}

fn main() {
    // example();

    println!("\n--- 双向通信 ---");
    // plugin_echo::call();

    println!("\n--- 投递即走 ---");
    plugin_fire::call();
}
