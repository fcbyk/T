import SwiftUI

/// 布局
/// 垂直排（VStack）
/// 水平排（HStack）
/// 叠加（ZStack）
/// 拉伸/占位（Spacer）
struct App3View:View {
    var body: some View {
        VStack(spacing: 20) {
            // 顶部：水平布局
            HStack(spacing: 10) {
                Text("左")
                    .padding(8)
                    .background(Color.blue.opacity(0.2))

                Spacer() // 占位，把左右推开

                Text("右")
                    .padding(8)
                    .background(Color.green.opacity(0.2))
            }

            // 中间：层叠布局
            ZStack {
                // Rectangle() 最基本的矩形框，类似 HTML 的 <div>，但默认没有内容，也没有颜色
                // 需要用 修饰符 给它填充颜色、设置尺寸、圆角等
                Rectangle()
                    .fill(Color.gray.opacity(0.2))
                    .frame(width: 200, height: 100)

                Text("叠加在上面")
            }

            // 底部：使用 Frame 控制尺寸
            // frame（尺寸控制 ≈ width / height）
            Text("固定尺寸")
                .frame(width: 150, height: 50)
                .background(Color.orange.opacity(0.3))
        }
        .padding()
    }
}

#Preview {
    App3View()
}
