# 学习计划 — 用 Rust 重构 bykcli Core

> 目标：达到"能看懂 AI 写的 Rust 代码 + 能准确表述需求"的水平，不追求深度掌握。

## 第一阶段：Rust 核心语法（看懂代码必须的）

| 领域 | 知识点 | 说明 | 提交 |
|------|--------|------|------|
| rust | 基础数据类型 | 整数、浮点、布尔、字符、元组、数组、切片、&str 与 String、类型转换 | demo110 |
| rust | 基础语法 | 函数定义、闭包、高阶函数、控制流（if/loop/while/for）、运算符 | demo111 |
| rust | 所有权与借用 | 所有权规则、引用（& / &mut）、move 与 clone、borrow checker 的存在理由 | demo112 |
| rust | 结构体与枚举 | struct 字段与方法、enum 变体、Option / Result 本质就是 enum | demo113 |
| rust | 模式匹配 | match、if let、while let、解构 | demo114 |
| rust | 错误处理 | Result&lt;T,E&gt;、? 运算符、panic 与 Result 的选择、unwrap / expect | - |
| rust | 集合类型 | Vec、HashMap、HashSet、String — 常用方法和遍历 | - |

## 第二阶段：工程与 bykcli 相关

| 领域 | 知识点 | 说明 | 提交 |
|------|--------|------|------|
| rust | trait 与泛型 | 理解 &lt;T: Trait&gt; 语法，常见的 From / Into / Display / Debug trait | - |
| rust | 模块与包管理 | mod / use / pub，Cargo.toml 依赖管理，第三方 crate 的引入方式 | - |
| rust | serde 序列化基础 | Serialize / Deserialize、#[derive]、JSON / TOML 序列化 — 配置管理核心 | - |
| rust | 文件读写 | std::fs 读写文件、std::io、BufReader — 配置读入 | - |
| rust | 命令行参数解析 | clap derive 模式：#[derive(Parser)]、参数、子命令 | - |
| rust | 进程管理 | std::process::Command、stdin / stdout / stderr — 插件通信基础 | - |

> 每个知识点完成后，在表格的提交栏填入对应 demo 编号。
