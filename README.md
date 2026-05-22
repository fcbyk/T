# demo16

> 创建：打开 Xcode → File → New → Playground

## 一、文件结构规则
- 根目录**仅允许**存在 `Contents.swift`，不可自建其他 `.swift` 文件
- 多文件代码**必须放入 `Sources` 文件夹**
- 资源文件放入 `Resources` 文件夹

## 二、代码运行机制
- `Contents.swift`：默认**自动运行**，可改为手动运行（长按右上角 ▶️ 选择 `Manually Run`）
- `Sources` 文件夹：**无法自动运行**，仅编译不执行，需被 `Contents.swift` 调用才执行

## 三、Sources 代码规范
1. 代码**必须写在函数/类/结构体**中，不可直接写裸代码
2. 需添加 `public` 修饰，否则外部无法调用
3. **无需导入**，`Contents.swift` 可直接调用

## 四、Swift 和 Xcode的【带后缀的文件夹】
它们都不是普通文件夹，而是系统能识别的专用包格式
- .playground    代码练习
- .xcodeproj     项目
- .xcworkspace   多项目工作区
- .framework     代码库
- .xcframework   跨平台代码库

## 五、注释
```swift
// 单行注释（和 C++/Java/Kotlin 一样）

/*
 多行注释
 可以嵌套
*/

/// 文档注释（用于生成 API 文档）
```