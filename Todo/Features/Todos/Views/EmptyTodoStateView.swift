import SwiftUI

/// 空状态视图。
///
/// `ContentUnavailableView` 是系统提供的空状态组件，
/// 很适合用于“暂无数据”“搜索无结果”这类场景。
struct EmptyTodoStateView: View {
    var body: some View {
        ContentUnavailableView(
            "暂时没有任务",
            systemImage: "checklist",
            description: Text("点击上方添加任务")
        )
    }
}
