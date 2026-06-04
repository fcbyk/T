// === ? 运算符：错误传播 ===
//
// ? 是 Rust 错误处理的核心：
//   Ok(v) → 取出 v，继续执行
//   Err(e) → 立即 return Err(e)，把错误向上抛
//
// 省掉无数 match / if let 嵌套。

use std::io;

// 一个"可能出错"的函数
fn read_username_from_file() -> Result<String, io::Error> {
    // ? 读文件：失败就 return Err，成功就拿到 String
    let content = std::fs::read_to_string("username.txt")?;
    Ok(content)
}

// get 返回 Option，? 也能用在 Option 上
fn get_first_char(s: &str) -> Option<char> {
    s.chars().nth(0) // 空字符串时返回 None
}

// 函数返回 Option 时，? 传播 None
fn print_first_char(s: &str) -> Option<()> {
    let c = get_first_char(s)?; // None 时 return None
    println!("首字符: {c}");
    Some(())
}

fn main() {
    // Result 的 ? 传播
    match read_username_from_file() {
        Ok(name) => println!("用户名: {name}"),
        Err(e) => println!("读文件失败: {e}"),
    }

    // Option 的 ? 传播
    print_first_char("hello");  // 首字符: h
    print_first_char("");       // None，什么都不打印
}
