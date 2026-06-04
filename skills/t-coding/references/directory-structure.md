# T 仓库主分支目录结构规范

| 层级 | 内容 | 生命周期 |
|------|------|----------|
| `README.md` | 当前 demo / MVP 概述文档 | 每个 commit 覆盖 |
| `run.byk.json` | bykcli 别名配置，运行命令入口（`byk app1`） | 每个 commit 覆盖 |
| `.gitignore` | 忽略编译产物（`target/` 等） | 永久保留 |
| `todo.md`（可选） | 当前学习目标计划表 | 跨 commit 保留，全部完成后迁移至 docs 索引并删除 |
| 其他文件 | demo 源码 | 每个 commit 切换 |

## Demo 形态选择

T 仓库中的 demo 默认优先采用更轻的形态，但不强制所有主题都塞进单文件。

### 形态一：单文件脚本模式

适用场景：

1. 语言语法
2. 基础概念
3. 局部机制验证
4. 不依赖复杂构建流程的小实验

典型特征：

1. 一个或多个单文件，如 `app1.rs`、`app2.rs`
2. 配套一个 `package.json` 脚本入口运行
3. 用户默认使用 VSCode 直接编写和运行

### 形态二：标准项目结构模式

适用场景：

1. 学习目标本身包含构建工具
2. 框架要求固定目录结构
3. 工程组织方式本身就是本次学习内容
4. 单文件模式已经无法自然承载运行方式

典型例子：

1. Spring Boot 通常应按 Maven / Gradle 工程组织，且很多场景更适合在 IDEA 中编写
2. Nuxt 应按框架要求创建标准项目目录，而不是写成单文件脚本

判断原则：

1. 能用单文件跑通，就优先用单文件脚本模式
2. 如果必须学习构建、脚手架、框架目录或工程规范，就直接采用标准项目结构

## docs 分支结构

docs 分支用于维护知识索引，而不是保存 demo 源码。

典型结构如下：

```text
基础必修/regex.md
WEB前端/javascript.md
移动端开发/swift.md
```

规则：

1. 上层目录表示知识分类
2. `xx.md` 表示一个主题文件
3. commit message 中的 `领域` 映射到某个主题文件，同一主题应复用同一个 docs 文件；映射规则与别名处理见 `references/docs-format.md` 的"领域映射规则"

补充说明：

- 维护 docs 索引时，不自动切换分支；默认先提示用户手动切换到 `docs` 分支
- 切换前应先确认当前 `main` 工作区已经提交干净
- docs 内容更新完成后，默认由用户自行检查并决定是否提交

更具体的表格格式遵循 `references/docs-format.md`

## README.md 规范

README 用短文按需讲解核心概念，不必套固定模板。根据知识点特点灵活组织：

- 适合对比的用对比（`方法 A vs 方法 B`）
- 适合图示的用 ASCII 图（管道、数据流）
- 适合分步的按步骤拆（三步）
- 代码示例有解释价值的直接贴

**不包含运行方式**——运行命令统一写在 `run.byk.json` 中。

不要做的：
- 机械罗列知识点表格
- 把源码注释整段照搬
- 列出文件映射关系
- 写运行命令
- 写运行命令

### run.byk.json 规范

运行命令统一写在 `run.byk.json` 中，使用 [bykcli](https://github.com/fcbyk/bykcli) 别名系统。编译产物输出到 `target/`（已在 `.gitignore` 中忽略）。

推荐使用占位符模板减少重复：

```json
{
  "app": "rustc app${0}.rs -o target/app${0} && target/app${0}",
  "app1": "byk app 1",
  "app2": "byk app 2"
}
```

运行方式：`byk app1` / `byk app2`。支持 VSCode 插件提供与 npm scripts 一致的体验。

> 占位符详细语法见 `references/byk-alias.md`。

### 首行格式
```
# demoN 知识点标题
```

或

```
# mvpN 项目标题
```

## todo.md 规范

`todo.md` 是**可选**文件，存在即表示当前有活跃的学习目标。其格式、字段定义、生命周期与迁移规则见 `references/todo-format.md`。
