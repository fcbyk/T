import SwiftUI

// 列表
struct App5View: View {
    
    var body: some View {
        VStack {
            List {
                Text("苹果")
                Text("香蕉")
                Text("橘子")
            }
            
            // 动态
//            let items = ["苹果", "香蕉", "橘子"]
//            List(items, id: \.self) { item in
//                Text(item)
//            }
        }
    }
}


#Preview {
    App5View()
}

