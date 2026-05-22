# MVP1

一个使用 SwiftUI 编写的 Todo 学习项目。

这个项目的目标不是做复杂功能，而是通过一个足够小的业务场景，把 Swift、SwiftUI、状态管理、目录组织、简单持久化这些基础知识串起来。后续回看这个仓库时，可以把它当作一个“最小但完整”的 iOS MVP 参考项目。

## 项目目标

- 用尽量少的业务复杂度练习 SwiftUI 开发流程
- 理解 `Model / ViewModel / View / Service` 的基本分层
- 学习 SwiftUI 的状态流转方式
- 练习本地 JSON 持久化
- 留下一份以后复习时能快速回忆知识点的代码结构

当前功能很简单：

- 新增待办
- 删除待办
- 标记为已完成
- 从已完成移回待办
- 本地保存任务数据

## 为什么这是一个适合学习的 MVP

Todo 类项目的优点是业务规则简单，但能覆盖很多 iOS 开发的基础点：

- 有基础数据模型
- 有界面状态同步
- 有列表渲染
- 有用户输入
- 有页面切换
- 有本地持久化

也就是说，它虽然小，但已经具备了一个 App 的基本骨架。学习时不容易被业务细节淹没，更适合把注意力放在代码结构和框架本身。

## 目录设计

当前目录结构如下：

```text
Todo
├── App
│   ├── RootTabView.swift
│   └── TodoApp.swift
├── Assets.xcassets
└── Features
    └── Todos
        ├── Models
        │   └── TodoItem.swift
        ├── Services
        │   └── TodoStorage.swift
        ├── ViewModels
        │   └── TodoListViewModel.swift
        └── Views
            ├── CompletedTodoListView.swift
            ├── EmptyTodoStateView.swift
            ├── PendingTodoListView.swift
            ├── TodoInputBar.swift
            └── TodoListRow.swift
```

这样设计的原因是：按“职责”和“功能”拆分，而不是按文件随意堆放。

### `App`

放应用入口和全局导航相关内容。

- `TodoApp.swift`
  - SwiftUI 应用入口，类似 App 生命周期的起点
- `RootTabView.swift`
  - 根视图，负责组织 Tab 结构

把入口相关代码单独放到 `App` 里，能让“项目从哪里开始”一眼就看清。

### `Features/Todos`

按功能模块组织代码。当前项目只有一个 Todo 功能，所以放在 `Features/Todos` 下。

这样做比直接写 `View / Model / ViewModel` 三个顶级目录更适合后续扩展。以后如果增加 `Profile`、`Settings`、`Notes`，可以继续按功能平铺：

```text
Features
├── Todos
├── Profile
└── Settings
```

这类结构更接近真实项目。

### `Models`

放业务数据结构。

- `TodoItem.swift`
  - 表示一条待办数据
  - 包含 `id`、`title`、`isCompleted`

模型层只描述“数据长什么样”，不负责界面，也不负责持久化。

### `ViewModels`

放界面状态和交互逻辑。

- `TodoListViewModel.swift`
  - 管理待办数组
  - 提供新增、删除、完成、恢复等操作
  - 负责触发保存

这里使用 `ObservableObject` + `@Published` 让 ViewModel 和 SwiftUI 界面建立响应式更新关系。

### `Views`

放界面层组件。

- `PendingTodoListView.swift`
  - 待办列表页
- `CompletedTodoListView.swift`
  - 已完成列表页
- `TodoInputBar.swift`
  - 输入框和添加按钮
- `TodoListRow.swift`
  - 列表行组件
- `EmptyTodoStateView.swift`
  - 空状态视图

View 层只关心“如何展示”和“如何触发用户交互”，尽量不直接承担数据管理职责。

### `Services`

放非 UI 的基础能力。

- `TodoStorage.swift`
  - 负责读取和保存本地 JSON

把持久化从 ViewModel 里拆出去，有几个好处：

- ViewModel 职责更单一
- 保存逻辑更容易替换
- 以后改成数据库、UserDefaults、网络接口时，界面层改动更小

## 为什么命名这样调整

重构后把一些“示例项目式命名”改成了更明确的名字：

- `ContentView` -> `RootTabView`
- `TodoListPage` -> `PendingTodoListView`
- `SecondPage` -> `CompletedTodoListView`
- `TodoInputView` -> `TodoInputBar`
- `TodoRow` -> `TodoListRow`
- `TodoViewModel` -> `TodoListViewModel`

原因很简单：命名应该直接表达职责。

例如：

- `SecondPage` 只说明“它是第二页”，但看不出业务含义
- `CompletedTodoListView` 一眼就知道它是“已完成任务列表页”

这种命名在项目变大后会明显降低理解成本。

## 架构思路

这个项目使用的是一个轻量的 MVVM 思路：

```text
View -> 用户操作 -> ViewModel -> 更新 Model -> 持久化
View <- 观察状态 <- ViewModel <- 读取数据 <- Storage
```

更具体一点：

1. `RootTabView` 创建 `TodoListViewModel`
2. 各个页面通过 `@ObservedObject` 观察 ViewModel
3. 用户点击“添加 / 删除 / 完成 / 恢复”时，调用 ViewModel 方法
4. ViewModel 修改 `todos`
5. `@Published` 通知界面刷新
6. `didSet` 中调度保存任务，把数据写入本地 JSON

这是一个很适合学习的小闭环，因为数据流清晰、依赖关系简单。

## 为什么 `todos` 只有一份

当前实现里，`TodoListViewModel` 只保存一份原始数据：

- `todos`

然后通过计算属性派生出：

- `pendingTodos`
- `completedTodos`

这样做比直接维护三份数组更稳妥。

如果同时维护：

- `todos`
- `pendingTodos`
- `completedTodos`

那么每次增删改都要同步更新三处状态，容易出现遗漏或不一致。

现在的做法是：

- 原始数据只有一个真源
- 其余列表都是从真源计算出来的结果

这符合“单一数据源”的最佳实践。

## 为什么要把保存逻辑做成异步防抖

在 `TodoListViewModel` 中，数据变化后不会立刻每次都写磁盘，而是会先取消旧任务，再延迟一点保存。

这样做的目的是：

- 避免连续编辑时频繁 IO
- 保持实现简单
- 让学习项目也带一点真实项目里的性能意识

虽然这是一个小项目，但这种设计习惯值得保留。

## 这个项目里可以复习什么

这个项目适合回顾这些 Swift / SwiftUI 知识点：

- `@main`
- `App`
- `TabView`
- `NavigationStack`
- `List`
- `ForEach`
- `ObservableObject`
- `@Published`
- `@StateObject`
- `@ObservedObject`
- `@State`
- `@Binding`
- `@FocusState`
- `@ViewBuilder`
- `some View`
- `Identifiable`
- `Codable`
- `Equatable`
- `@MainActor`
- `nonisolated`
- `Task`
- `Task.sleep`
- `??` 空合并运算符
- `ContentUnavailableView`
- `swipeActions`

因此这个仓库不只是一个 Todo Demo，也是一份基础知识的练习索引。

## 关键文件说明

### `Todo/App/TodoApp.swift`

应用入口。

作用：

- 启动 App
- 指定初始场景
- 挂载根视图

### `Todo/App/RootTabView.swift`

根视图。

作用：

- 创建 `TodoListViewModel`
- 组织待办页和已完成页两个 Tab

这里使用 `@StateObject`，因为 ViewModel 的生命周期由根视图创建并持有。

### `Todo/Features/Todos/ViewModels/TodoListViewModel.swift`

Todo 模块的核心状态管理类。

作用：

- 保存待办数据
- 对外暴露界面可读状态
- 处理增删改业务动作
- 调度保存

这个文件最适合回顾：

- `ObservableObject`
- `@Published`
- `@MainActor`
- 计算属性
- 简单并发任务

### `Todo/Features/Todos/Services/TodoStorage.swift`

本地持久化实现。

作用：

- 启动时读取 JSON
- 修改后写回 JSON

这个文件最适合回顾：

- `Codable`
- `JSONEncoder`
- `JSONDecoder`
- `FileManager`
- `URL`
- `??`

### `Todo/Features/Todos/Views/PendingTodoListView.swift`

待办列表主页面。

作用：

- 展示待办列表
- 管理输入框焦点
- 调用 ViewModel 添加或完成任务

这个文件最适合回顾：

- `@ObservedObject`
- `@State`
- `@FocusState`
- `NavigationStack`
- `List`
- `@ViewBuilder`

## 为什么 README 要写这些内容

学习项目的 README 不只是“怎么运行”，更重要的是回答下面几个问题：

- 这个项目是干什么的
- 代码分层为什么这样做
- 哪些设计是为了学习，哪些设计是为了规范
- 回来看时应该先读哪些文件

如果没有这些说明，过几周再看代码时，很容易只记得“这是个 Todo”，但忘了当时为什么这样拆。

## 后续可以怎么继续扩展

如果以后你想继续把这个学习项目往前推进，可以考虑这些方向：

1. 增加任务编辑能力
2. 增加截止时间、优先级等字段
3. 为列表增加排序和筛选
4. 把 `TodoStorage` 抽象得更完整，便于替换存储实现
5. 增加单元测试，重点测试 ViewModel
6. 再补一版更系统的 SwiftUI Preview 示例

## 运行方式

1. 用 Xcode 打开 `Todo.xcodeproj`
2. 选择目标设备或模拟器
3. 运行 `Todo` scheme

如果当前机器的签名或模拟器环境有问题，优先先确认：

- Xcode Command Line Tools 是否正常
- 模拟器 runtime 是否已安装
- 签名配置是否正确

## 总结

这是一个有意保持简单的 Todo MVP。

它的重点不是炫技，而是通过一个小而完整的业务案例，把以下几件事练熟：

- SwiftUI 基础视图开发
- 基本状态管理
- 简单分层
- 规范命名
- 最小持久化

如果以后回看这个仓库，希望你看到的不只是“一个 Todo Demo”，而是一份能帮你快速恢复 iOS 开发记忆的基础模板。
