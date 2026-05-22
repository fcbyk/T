import SwiftUI

/// 应用根视图，负责组织 Tab 导航。
struct RootTabView: View {
    /// `@StateObject` 适合在“创建者”一侧持有引用类型状态。
    /// 这里由根视图创建 `TodoListViewModel`，因此使用 `@StateObject`
    /// 可以保证视图刷新时对象不会被反复重建。
    @StateObject private var viewModel = TodoListViewModel()

    var body: some View {
        TabView {
            PendingTodoListView(viewModel: viewModel)
                .tabItem {
                    Label("待办", systemImage: "checklist.unchecked")
                }

            CompletedTodoListView(viewModel: viewModel)
                .tabItem {
                    Label("已完成", systemImage: "checkmark.circle.fill")
                }
        }
    }
}

struct RootTabView_Previews: PreviewProvider {
    static var previews: some View {
        RootTabView()
    }
}
