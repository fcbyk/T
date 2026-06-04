# Commit Message 规范

## 消息格式

### 语言要求

**必须使用英文提交，使用英文官方术语。** 例如 `ownership and borrowing` 而非 `所有权与借用`。

### Demo 提交

```
领域(dN): 学习主题

具体描述（知识点目录，可选；留空则用 - 代替）
```

### Demo 补充提交（dN+）

对已有 demo 的补充、bug 修复、小改动，使用 `dN+`：

```
领域(dN+): 改动说明
```

`dN+` 可多次使用，content 自定义说明改了什么。

```
rust(d2+): add error handling for edge cases
rust(d2+): fix memory leak in parser
```

### MVP 提交

```
领域(mN): MVP主题

具体描述（知识点目录，可选；留空则用 - 代替）
```

### MVP 补充提交（mN+）

对已有 MVP 的补充、bug 修复、小改动，使用 `mN+`：

```
领域(mN+): 改动说明
```

`mN+` 可多次使用，content 自定义说明改了什么。

```text
swift(m1+): fix empty state rendering
swift(m1+): add quick input validation
```

### 字段说明

| 字段 | 说明 | 示例 |
|------|------|------|
| `领域` | docs 主题标识，映射规则见 `references/docs-format.md` 的"领域映射规则" | `regex`, `js`, `swift` |
| `dN` | Demo 编号，d = demo，N 从 1 递增 | `d1`, `d109` |
| `dN+` | Demo 连续补丁编号，表示对同一个 demo 的连续小修小补 | `d2+` |
| `mN` | MVP 编号，m = MVP，N 从 1 递增，与 d 独立计数 | `m1`, `m2` |
| `mN+` | MVP 连续补丁编号，表示对同一个 MVP 的连续小修小补 | `m1+` |
| `学习主题` | 对应 docs 表格中的"知识点"，用于概括本次 demo 的核心知识点 | `ownership and borrowing`, `lookahead and lookbehind` |
| `具体描述` | 对应 docs 表格中的"说明"，用于写这个知识点的展开目录（子主题列表），保持简洁；如果没有特别要写的，用 `-` 占位 | `for, while, if, switch, break` 或 `-` |

## 与 docs 索引的映射关系

demo commit 与 docs 分支中的索引行一一对应：

| Commit 字段 | docs 字段 | 说明 |
|------------|----------|------|
| `领域` | `xx.md` | 对应 docs 中语义一致的主题文件，例如 `regex` -> `regex.md`、`js` -> `javascript.md` |
| `学习主题` | `知识点` | 一条 demo 对应一个知识点 |
| `具体描述` | `说明` | 作为该知识点的展开目录或提纲 |

补充规则：

1. `具体描述` 一般不需要太长
2. 核心讲解内容写在该 commit 对应快照里的 `README.md`
3. docs 中的“知识点”和“说明”更偏索引和大纲，而不是完整正文
4. 即使是同一个知识点重新写 demo，也应创建新的 `dN`，不能复用旧编号
5. 对同一条 demo / MVP 的连续小修小补，可继续使用 `dN+` / `mN+`
6. `领域` 的映射规则见 `references/docs-format.md` 的"领域映射规则"
7. commit message 继续保持英文，不因为 docs 表格使用中文而改成中文提交
8. 从 commit 生成 docs 索引时，`学习主题` 与 `具体描述` 应优先转换为中文；确实不适合中文时再保留英文

### 实际示例

```
regex(d110): grouping

capturing groups, named groups, backreferences, non-capturing groups
```

```
swift(m1): ios TodoList App

add, delete, mark-complete
```

```text
js(d2): prototype chain and inheritance

class syntax sugar, prototype-based inheritance
```

```text
js(d2+): fix prototype lookup example
```

```text
javascript(d2+): align docs mapping with javascript.md
swift(m1+): fix empty state rendering
```

> 注意：具体描述为知识点目录，例如 `for, while, if, switch, break` 或 `capturing groups, named groups`。如果该 demo 不需要展开目录，用 `-` 占位。

---

## 编号规则

- **d 和 m 独立计数**，互不干扰
- **新的 demo 一律使用新的 `dN`**。即使知识点与历史 demo 相同，只要是重新写的一次 demo，也继续按当前最大编号往后递增
- **`dN+` / `mN+` 不参与编号递增**，仅作为补充提交标记。例如 `d2` 之后有多个 `d2+`，下一个新 demo 仍然是 `d3`
- **只有对已有 demo / MVP 的补充、bug 修复、小改动，才使用 `dN+` / `mN+`**。不要把“同知识点重写一个新 demo”误记为 `dN+`
- **`dN+` / `mN+` 应该是连续提交链**。典型场景是刚提交完发现还要补一点点功能、修一个小 bug、补一处说明，此时直接追加新提交，不要 `git reset`
- **不推荐离散地回头补很早以前的 `dN+` / `mN+`**。例如已经写到 `d200`，再去补 `d10+`（中间有超过 1 个无关 commit）通常没有意义，更推荐重新写一个新的 demo，用新的 `dN` 覆盖索引
- **一个主题可以形成一条连续提交链**，例如 `d4`、`d4+`、`d4+`，或 `m1`、`m1+`、`m1+`
- 每次提交前，从 git log 解析当前最大编号，自动 +1
- 默认查询最近提交即可，不必每次扫描全部历史；如果近期历史不足以判断最大编号，再扩大查询范围
- 查找命令（macOS / Linux 通用，无 GNU grep -P 依赖）：
  ```bash
  # 在最近 200 条提交中查找最大 d 编号
  # 自动排除 dN+，因为 dN+ 格式为 (dN+) 不匹配 (dN)
  git log -n 200 --oneline | sed -nE 's/.*\(d([0-9]+)\).*/\1/p' | sort -n | tail -1

  # 在最近 200 条提交中查找最大 m 编号
  # 自动排除 mN+，因为 mN+ 格式为 (mN+) 不匹配 (mN)
  git log -n 200 --oneline | sed -nE 's/.*\(m([0-9]+)\).*/\1/p' | sort -n | tail -1
  ```

如果查询结果为空，但仓库不是冷启动状态，应继续扩大范围，例如去掉 `-n 200` 后再查；仍为空时才按冷启动规则处理。

## 什么时候用新 `dN` / `mN`

以下情况应创建新的 `dN` 或 `mN`：

1. 这是一个新的 demo / MVP 起点提交
2. 虽然知识点与历史记录相同，但这次是重新写的一版，而不是在原提交上补丁
3. 当前改动已经超出“小修小补”范围，形成了新的实现思路、结构或实验版本
4. 已经隔了超过 1 个无关 commit，再回头修改很早以前的 demo / MVP
5. 希望 docs 主索引切换到一条新的学习链路

推荐判断：

- 如果你会把它描述为“重新做一版”，用新的 `dN` / `mN`
- 如果你会把它描述为“刚提交完又补一点”，用 `dN+` / `mN+`

## 什么时候用 `dN+` / `mN+`

以下情况应使用 `dN+` 或 `mN+`：

1. 刚提交完 `dN` / `mN`，立刻发现一个小 bug 要修
2. 刚提交完后，只需要补一点点功能、边界处理、示例或说明
3. 当前改动仍然明显属于同一条连续提交链
4. 不希望 `git reset`，而是通过后续提交自然补齐

不应使用 `dN+` / `mN+` 的情况：

1. 改动已经足以视为新的 demo / MVP
2. 已经隔了超过 1 个无关 commit，再回头修很早以前的编号
3. 想借 `dN+` / `mN+` 复用旧编号来表示"同知识点新版本"

## 快速决策表

| 场景 | 提交类型 | 原因 |
|------|----------|------|
| 新做一个 demo | 新 `dN` | 新起点 |
| 新做一个 MVP | 新 `mN` | 新起点 |
| 刚提交后修一个小 bug | `dN+` / `mN+` | 连续小修 |
| 刚提交后补一个很小的功能 | `dN+` / `mN+` | 连续迭代 |
| 同知识点重写一版 demo | 新 `dN` | 新版本，不复用旧编号 |
| 已经到 `d200` 再回头补 `d10`（中间超过 1 个无关 commit） | 新 `dN` | 不建议离散补旧链 |
