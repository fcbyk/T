import SwiftUI

// 导航（页面跳转）
struct App6View: View {    
    var body: some View {
        NavigationStack {
            List {
                NavigationLink("去详情页") {
                    App2View()
                }
            }
        }
    }
}


#Preview {
    App6View()
}


