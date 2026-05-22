import SwiftUI  // 导入 SwiftUI 框架

// 定义结构体，遵循 View 协议
struct ContentView: View {
    
    // 计算属性，只有get可以省略get关键字，一行可以省略return
    var body: some View {
        Text("你好 世界")
    }
}

// 预览代码，仅在 Xcode 的 Canvas 中显示，不会影响正式运行
#Preview {
    ContentView()  // 实时预览 ContentView 的界面
}
