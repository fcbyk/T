# demo113 Rust 结构体与枚举

struct 组织数据，enum 表达"多种可能性中的一种"，impl 给它们加行为。

## 知识点

| # | 知识点 | 说明 |
|---|--------|------|
| 1 | 结构体基础 | struct 定义与实例化、字段访问、mut 可变性、构造语法糖 `..other` |
| 2 | 元组/单元结构体 | 字段无名按 `.0` 访问的元组结构体、零大小单元结构体 |
| 3 | 枚举 | 变体可携带数据（tagged union）、简单枚举与带数据枚举 |
| 4 | impl 块 | `&self` 方法、`&mut self` 可变方法、关联函数（无 self）、`#[derive(Debug)]` |
| 5 | Option 与 Result | 标准库枚举的本质：`Some/None`、`Ok/Err`、unwrap/unwrap_or |
| 6 | 属性语法 #[...] | #[derive]、#[allow]、#[test]、#[cfg] — 编译期指令 |
| 7 | 格式化输出 | {} Display、{:?} Debug、{:#?} 美化、对齐、进制、精度、print!/format!

## 运行

```bash
rustc app1.rs && ./app1
rustc app2.rs && ./app2
rustc app3.rs && ./app3
rustc app4.rs && ./app4
rustc app5.rs && ./app5
rustc app6.rs && ./app6
rustc app7.rs && ./app7
```
