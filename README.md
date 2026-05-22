# demo20

## iOS App 目录结构与最小运行

```
├── app
│   ├── App.swift                     # App 入口文件，定义 @main 和应用的生命周期
│   ├── Assets.xcassets               # 资源文件夹，可选，存放图片、图标、颜色等资源
│   │   ├── AccentColor.colorset      # 自定义颜色资源
│   │   │   └── Contents.json         # 颜色资源的配置文件
│   │   ├── AppIcon.appiconset        # App 图标集合
│   │   │   └── Contents.json         # 图标配置（不同尺寸/分辨率）
│   │   └── Contents.json             # Assets.xcassets 的整体配置文件
│   └── ContentView.swift             # 默认视图文件，UI 入口界面
└── app.xcodeproj                     # Xcode 工程文件，管理项目配置
    ├── project.pbxproj               # 核心工程配置文件，记录文件、Target、编译设置、依赖关系
    ├── project.xcworkspace           # workspace 文件夹，管理一个或多个 project
    │   ├── contents.xcworkspacedata # workspace 配置文件，列出包含的 project（即便只有一个 project 也必需）
    │   ├── xcshareddata
    │   │   └── swiftpm
    │   │       └── Package.resolved  # Swift Package 锁定文件，记录依赖版本
    │   └── xcuserdata
    │       └── coke.xcuserdatad
    │           └── UserInterfaceState.xcuserstate  # 用户 UI 状态（窗口位置、打开文件等）
    └── xcuserdata
        └── coke.xcuserdatad
            └── xcschemes
                └── xcschememanagement.plist       # 用户特定的 scheme 管理文件
```

## 核心概念总结

1. **app 文件夹**

   * 放源代码和资源
   * 可自由划分子目录（如 `Views/`, `Models/`, `ViewModels/`, `Utils/` 等）
   * Swift 文件必须加入 **Target Membership** 才会被编译

2. **app.xcodeproj / workspace**

   * `project.pbxproj`：核心工程配置，记录文件列表、Target、依赖等
   * `contents.xcworkspacedata`：workspace 配置，列出包含的 project，即便只有一个 project，也必须保留
   * `xcshareddata/swiftpm/Package.resolved`：锁定第三方依赖版本
   * `xcuserdata`：用户个人状态文件，**不提交 Git**

3. **Swift Package 管理**

   * 添加第三方包时，Xcode 会修改 `project.pbxproj` 和 `Package.resolved`
   * 依赖源码下载到 **DerivedData/SourcePackages/**，不会放入项目目录
   * Git 提交时只需要提交 `project.pbxproj` + `Package.resolved`
   * 本地 Package 也可以放在任意目录，只要有 `Package.swift` 并在 Xcode 添加引用即可
   * Package 文件夹中必须使用 `Sources/<ModuleName>/` 结构才能被识别

4. **最小可运行 demo**

   * 如果没有第三方依赖，最小结构可以只保留：

     ```
     MyApp/
     ├── MyApp.xcodeproj/
     └── MyApp/
         ├── MyAppApp.swift
         └── ContentView.swift
     ```
   * Assets.xcassets 可以删，但会丢失 App 图标和 AccentColor，运行和 Preview 不受影响
   * 文件必须在 Target 中，@main 必须存在，才能运行

5. **引用规则**

   * 普通 Swift 文件：加入 Target Membership 才能被 import
   * Swift Package：Add Package Dependency → 选择 Target
   * clone 别人的项目，只要提交了 `project.pbxproj` + `Package.resolved`，依赖会自动下载，无需手动添加

6. **Git 忽略规则**

   ```
   DerivedData/
   xcuserdata/
   *.xcuserstate
   ```

   * 提交工程和代码，忽略 IDE 临时文件和用户状态
