# bykcli 别名占位符参考

T 仓库使用 bykcli 别名系统运行 demo。运行命令写在 `run.byk.json` 中。

## 基本格式

```json
{
  "key": "shell command"
}
```

运行：`byk key`。Key 支持中文和嵌套分组（`.` 分隔）。

## 占位符一览

| 占位符 | 说明 | 示例 |
|--------|------|------|
| `${N}` | 第 N 个位置参数（从 0 开始） | `echo ${0}` — `byk echo hello` → `echo hello` |
| `${args}` | 所有原始参数 | `echo ${args}` — `byk echo a b c` → `echo a b c` |
| `${...args}` | 剩余参数（去除已被其他占位符消耗的） | `cmd --flag ${...args}` |

## T 仓库典型用法

复用模板别名，减少重复：

```json
{
  "app": "rustc app${0}.rs -o target/app${0} && target/app${0}",
  "app1": "byk app 1",
  "app2": "byk app 2"
}
```

`byk app1` → 执行 `byk app 1` → `${0}` 替换为 `1` → `rustc app1.rs -o target/app1 && target/app1`

## 字节跳转

编译产物统一输出到 `target/`，已在 `.gitignore` 中忽略。

> 完整语法（具名占位符、可选透传、条件渲染等）见 bykcli 官方文档。
