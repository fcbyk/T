# demo120 clap 命令行参数解析

### 一个结构体 = 一个 CLI

`#[derive(Parser)]` 让结构体字段自动映射为命令行参数。`#[arg(short, long)]` 等于 Python click 的 `@click.option('-v', '--verbose')`。clap 自动生成 `--help` 和 `--version`。

### 一个枚举 = 一组子命令

`#[derive(Subcommand)]` 让枚举每个变体成为一个子命令。`Add { name, cmd }` 自动生成 `add <NAME> <CMD>` 语法。和 click 的 `@cli.group()` + `@cli.command()` 对应。

### 三步搞定一个 CLI

1. **定义结构体** — 字段 = 参数，`#[arg(short)]` 定义选项类型，`Option<T>` 控制是否必填
2. **`Cli::parse()`** — clap 自动从命令行填入结构体，生成 help/version
3. **match 判断** — 拿到字段值，写业务逻辑（回调）

和 click 同样的声明式风格，只是语法从装饰器换成属性宏。

### 依赖

```toml
clap = { version = "4", features = ["derive"] }
```

`features = ["derive"]` 启用 derive 宏，和 serde 一样的模式。
