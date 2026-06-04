# demo121 进程管理

`std::process::Command` 就是 Rust 版的 `subprocess.run()` / `child_process.exec()`。

### `.output()` 截获 vs `.status()` 直通

`.output()` 把子进程输出截获到内存，终端看不到。`.status()` 子进程直接输出终端，Rust 只拿退出码。

### 双向通信：Rust ↔ Python（stdin 请求 → stdout JSON 响应）

Rust 通过 stdin 发送 JSON 请求，Python 处理后通过 stdout 返回 JSON。stdout/stderr 被截获，终端看不到 Python 输出。适合需要拿结果的场景。

### 投递即走：Rust → Python（stdin 命令 → 终端输出）

不设 stdout/stderr，子进程继承终端直接输出。Rust 写完命令立刻退出，不等结果。异常、日志全在终端。适合不需要拿结果的场景。

### 文件结构

```
src/
  main.rs          — 入口，演示四种模式
  plugin_echo.rs   — 双向通信（stdin→stdout JSON）
  plugin_fire.rs   — 投递即走（stdin→终端直接输出）
plugin_echo.py      — 双向通信 Python 脚本
plugin_fire.py      — 投递即走 Python 脚本
```
