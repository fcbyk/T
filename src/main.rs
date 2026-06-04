// === clap CLI 入口 ===
//
// Cli::parse() 自动从 std::env::args() 解析命令行参数。
// arg_required_else_help = true：无参数时自动显示 --help。
// config 为 Option<String>：只有传了 -c 才输出。

mod cli;

use clap::Parser;
use cli::{Cli, Command};

fn main() {
    let cli = Cli::parse();

    // -v：显示版本
    if cli.verbose {
        println!("bykcli Rust 原型 v0.1.0");
        return;
    }

    // 有 -c 且无子命令时，输出配置文件路径
    if let Some(ref config) = cli.config {
        println!("配置文件: {config}");
    }

    // 子命令分发
    match cli.command {
        Some(Command::Add { name, cmd }) => {
            println!("添加别名: {} => {}", name, cmd);
        }
        Some(Command::Remove { name }) => {
            println!("删除别名: {}", name);
        }
        Some(Command::List) => {
            println!("列出所有别名（暂未实现）");
        }
        Some(Command::Run { name, args }) => {
            let extra = if args.is_empty() {
                String::new()
            } else {
                format!(" 参数: {}", args.join(" "))
            };
            println!("执行别名: {}{}", name, extra);
        }
        None => {} // arg_required_else_help 保证了无参数时 clap 自动显示 help
    }
}
