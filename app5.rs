// === ? 的妙用：把 panic 多发的代码变安全 ===
//
// 一个完整的示例：用 ? 串联多个可能出错的操作。
// 和 Python 的 try/except 或 JS 的 try/catch 不同的地方：
//   错误不是抛出来的，是返回值。编译器逼你处理。

use std::fs;
use std::io;

// 读取配置文件，解析成数字，做除法。
// 每一步都可能失败，但 ? 让代码保持线性，不嵌套。
fn process_config() -> Result<String, io::Error> {
    // 读文件 → 失败就 return Err
    let content = fs::read_to_string("/tmp/not-exists.txt")?;

    // 解析第一行
    let first_line = content.lines().next().unwrap_or("");
    let num: i32 = first_line.parse().map_err(|e| {
        io::Error::new(io::ErrorKind::InvalidData, format!("不是数字: {e}"))
    })?;

    // 做除法（这里的 map_err 把 ParseError 转成 io::Error）
    let result = 100 / num;
    Ok(format!("结果: {result}"))
}

fn main() {
    match process_config() {
        Ok(msg) => println!("{msg}"),
        Err(e) => println!("处理失败: {e}"),
    }
}
