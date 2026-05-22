import SwiftUI

// 按钮 + 状态
struct App4View: View {
    /**
     @State 是一个属性包装器（Property Wrapper）
       - 表示这个变量是一个状态（state），SwiftUI 会监控它的值变化
       - 当这个变量的值改变时，依赖它的 View 会自动重新渲染，而不是手动刷新界面
       - 这是 SwiftUI 声明式 UI 的核心机制：数据驱动界面
     */
    @State private var count = 0
    
    var body: some View {
        VStack {
            Text("点击次数: \(count)")
            
            Button("点我") {
                count += 1
            }
            
            // 条件渲染
            if count % 2 == 0 {
                Text("偶数")
            } else {
                Text("奇数")
            }
        }
    }
}


#Preview {
    App4View()
}
