# demo107 Rust Hello World
 
## 1. 安装环境
 
使用官方工具链管理器 **rustup**（不要用 brew，无法管理多版本）。
 
**macOS / Linux**
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```
 
**Windows**  
下载并运行 [rustup-init.exe](https://rustup.rs)。
 
安装完成后重启终端，验证：
```bash
rustc --version   # rustc 1.x.x (xxxxxxx 20xx-xx-xx)
cargo --version   # cargo 1.x.x (xxxxxxx 20xx-xx-xx)
```
 
> 版本号后面括号里是 Git commit hash + 日期，用于精确标识构建来源，日常忽略即可。
 
## 2. 创建并运行项目
 
```bash
cargo new hello_world   # 新建项目
cd hello_world
cargo run               # 编译 + 运行
```
 
## 3. 项目结构
 
```
hello_world/
├── Cargo.toml     # 项目配置文件（依赖、版本等）
├── Cargo.lock     # 依赖锁文件（自动生成）
├── src/
│   └── main.rs    # 源码入口
└── target/        # 编译产物（勿提交 git）
    └── debug/
        └── hello_world   # 可执行文件
```
 
### Cargo.toml
 
项目的核心配置文件，类似前端的 `package.json`：
 
```toml
[package]
name = "hello_world"
version = "0.1.0"
edition = "2021"
 
[dependencies]
# 在这里添加第三方依赖
```
 
### Cargo.lock
 
精确锁定依赖版本，类似 `package-lock.json`：
 
- **可执行程序** → 提交到 git，保证构建一致
- **库（lib）** → 不提交，让使用方自行解析
### target/
 
所有编译产物都在这里，体积很大，必须加入 `.gitignore`：
 
```
# .gitignore
/target
```
 
## 4. 常用 Cargo 命令
 
| 命令 | 作用 |
|------|------|
| `cargo new <name>` | 新建项目 |
| `cargo build` | 编译（生成 debug 产物） |
| `cargo run` | 编译 + 运行 |
| `cargo check` | 只做类型检查，不生成二进制（快） |
| `cargo clippy` | Lint 检查 |
| `cargo fmt` | 格式化代码 |
| `cargo build --release` | 编译优化版本（生产用） |
 
## 5. IDE 推荐
 
**VS Code + rust-analyzer 插件**（首选）
 
- 代码补全、类型推断
- 内联错误提示
- 自动格式化
- 跳转定义、重命名重构
其他选项：RustRover（JetBrains，功能最全）、Zed（速度极快，macOS/Linux）