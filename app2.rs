// === 枚举匹配：解开 Option 和 Result ===
//
// match 最常见的用途是拆解枚举，取出里面的值。

fn main() {
    // —— 匹配 Option ——
    let val: Option<i32> = Some(42);

    match val {
        Some(v) => println!("有值: {v}"),
        None => println!("空的"),
    }

    // —— 匹配 Result ——
    let result: Result<i32, &str> = Ok(100);

    match result {
        Ok(v) => println!("成功: {v}"),
        Err(e) => println!("失败: {e}"),
    }

    // —— 匹配自定义枚举 ——
    #[allow(dead_code)]
    enum Command {
        Start,
        Stop,
        Rename(String),
        Move { x: i32, y: i32 },
    }

    let cmd = Command::Move { x: 10, y: 20 };

    match cmd {
        Command::Start => println!("启动"),
        Command::Stop => println!("停止"),
        Command::Rename(name) => println!("重命名为: {name}"),
        Command::Move { x, y } => println!("移动到: ({x}, {y})"),
    }
    // 注意：match 会消耗 cmd 的所有权（如果变体含非 Copy 数据）
}
