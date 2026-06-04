# demo114 Rust 模式匹配

match 是 Rust 的杀手级特性——比 switch 强太多了。穷尽性检查、解构嵌套、守卫条件。

## 知识点

| # | 知识点 | 说明 |
|---|--------|------|
| 1 | match 基础 | 模式臂、穷尽性、通配符 `_`、多值 `\|`、范围 `..=`、match 守卫 |
| 2 | 枚举匹配 | 拆解 Option/Result、解自定义 enum 变体取出数据 |
| 3 | if let / while let | 只关心一种情况的语法糖、栈弹出循环 |
| 4 | 解构 | 元组/结构体解构、重命名、`..` 忽略部分字段、嵌套解构 |
| 5 | 进阶匹配 | @ 绑定、ref 借用匹配、更复杂的守卫条件 |

## 运行

```bash
rustc app1.rs && ./app1
rustc app2.rs && ./app2
rustc app3.rs && ./app3
rustc app4.rs && ./app4
rustc app5.rs && ./app5
```
