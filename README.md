# demo115 Rust 错误处理

Rust 没有异常——错误就是值。`Result<T, E>` 是返回值，`?` 是传播，编译器逼你处理。

## 知识点

| # | 知识点 | 说明 |
|---|--------|------|
| 1 | panic vs Result | panic! 崩溃 vs Ok/Err 返回值、unwrap/expect 快速取值 |
| 2 | ? 运算符 | 自动传播错误：Ok 取出值、Err 立即 return |
| 3 | Result/Option 方法 | unwrap_or、and_then 链式、map/map_err 转换、ok/err 互转 |
| 4 | 何时 panic 何时 Result | 可恢复用 Result、bug 用 panic、库 API 用 Result |
| 5 | 实战：? 串联 | 读文件→解析→计算，多重 ? 保持代码线性不嵌套 |

## 运行

```bash
rustc app1.rs && ./app1
rustc app2.rs && ./app2
rustc app3.rs && ./app3
rustc app4.rs && ./app4
rustc app5.rs && ./app5
```
