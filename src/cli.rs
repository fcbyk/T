// === clap CLI 参数定义 ===
//
// #[derive(Parser)] 让结构体字段自动映射为命令行参数。
// 对比 Python click: @click.option('-v') 等价于 #[arg(short)]
//
// short = 只有短选项（-v），long = 只有长选项（--verbose），short + long = 两者都有

use clap::{Parser, Subcommand};

/// bykcli 的 Rust 原型
#[derive(Parser)]
#[command(name = "bykcli", version = "0.1.0", arg_required_else_help = true)]
pub struct Cli {
    /// 显示版本信息
    #[arg(short)]                       // 只有 -v，没有 --verbose
    pub verbose: bool,

    /// 配置文件路径（可选，传入时才显示）
    #[arg(short, long)]  // -c, --config
    pub config: Option<String>,

    /// 子命令（可选：不传则显示概览信息）
    #[command(subcommand)]
    pub command: Option<Command>,
}

/// 子命令（枚举每个变体 = 一个子命令）
#[derive(Subcommand)]
pub enum Command {
    /// 添加别名
    Add {
        /// 别名名称
        name: String,
        /// 别名命令
        cmd: String,
    },
    /// 删除别名
    Remove {
        /// 别名名称
        name: String,
    },
    /// 列出所有别名
    List,
    /// 执行别名
    Run {
        /// 别名名称
        name: String,
        /// 额外参数
        args: Vec<String>,
    },
}
