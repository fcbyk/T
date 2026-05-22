import SwiftUI

/// @main 标记这个结构体是应用的主入口
/// SwiftUI 会根据这个结构体生成 main 函数并启动应用
@main
struct app: App {
    var body: some Scene {
        // 尾随闭包语法
        WindowGroup {
            ContentView()
        }
    }
}
