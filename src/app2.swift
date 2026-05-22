import SwiftUI

/// 基础组件（链式编程）
/// 组件.修饰( ).修饰( ).修饰( )
struct App2View:View {
    var body: some View {
        // 容器组件
        VStack {
            // 文本
            Text("Hello SwiftUI")
                .font(.title)
                .padding(20)
            Text("副标题")
                .font(.subheadline)
            
            // 图片
            Image(systemName: "star.fill")
                .font(.largeTitle)

            // 按钮
            Button("点击我") {
                print("按钮被点击")
            }

            // 输入框
            TextField("请输入内容", text: .constant(""))
                .padding(20)

            // 开关
            Toggle("开关", isOn: .constant(true))
                .padding(20)
            
        }
    }
}

#Preview {
    App2View()
}

