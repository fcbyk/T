import SwiftUI

struct PendingTodoListView: View {
    /// `@ObservedObject` 适合“由外部注入”的可观察对象。
    /// 当前页面不拥有 ViewModel 的生命周期，只负责订阅更新。
    @ObservedObject var viewModel: TodoListViewModel

    @State private var draftTitle = ""

    /// `@FocusState` 用于管理输入焦点。
    /// 焦点变化通常会直接影响键盘的弹出与收起。
    @FocusState private var isInputFocused: Bool

    var body: some View {
        // `NavigationStack` 是 iOS 16+ 推荐的导航容器，
        // 用来承载页面跳转路径，比旧的 `NavigationView` 更现代。
        NavigationStack {
            VStack(spacing: 16) {
                header
                inputBar
                content
            }
            .padding(.horizontal)
            .padding(.bottom)
            .background(backgroundDismissLayer)
        }
    }
}

private extension PendingTodoListView {
    /// `some View` 表示“返回某个遵守 View 协议的具体类型”，
    /// 但调用方不需要知道它到底是 `VStack` 还是别的组合视图。
    var header: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("待办列表")
                .font(.largeTitle)
                .fontWeight(.bold)

            Text("右滑移到已完成，左滑删除")
                .font(.subheadline)
                .foregroundStyle(.secondary)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(.top, 30)
        .onTapGesture {
            dismissKeyboard()
        }
    }

    var inputBar: some View {
        TodoInputBar(
            text: $draftTitle,
            isTextFieldFocused: $isInputFocused,
            onSubmit: submitTodo
        )
    }

    /// `@ViewBuilder` 允许同一个属性里根据条件分支返回不同视图，
    /// 例如这里可以在空状态和列表之间切换，而不必手动做类型擦除。
    @ViewBuilder
    var content: some View {
        if viewModel.pendingTodos.isEmpty {
            EmptyTodoStateView()
                .contentShape(Rectangle())
                .onTapGesture {
                    dismissKeyboard()
                }
        } else {
            List(viewModel.pendingTodos) { todo in
                TodoListRow(
                    todo: todo,
                    leadingSwipeAction: .init(
                        title: "移到已完成",
                        systemImage: "checkmark.circle.fill",
                        tint: .green,
                        action: { viewModel.markTodoCompleted(id: todo.id) }
                    ),
                    trailingSwipeAction: .init(
                        title: "删除",
                        systemImage: "trash",
                        tint: .red,
                        role: .destructive,
                        action: { viewModel.deleteTodo(id: todo.id) }
                    )
                )
            }
            .listStyle(.plain)
            .scrollDismissesKeyboard(.immediately)
            .simultaneousGesture(
                TapGesture().onEnded {
                    dismissKeyboard()
                }
            )
        }
    }

    var backgroundDismissLayer: some View {
        // 用透明层承接“点空白处收起键盘”的交互，
        // 不影响真正有内容的子视图布局。
        Color.clear
            .contentShape(Rectangle())
            .onTapGesture {
                dismissKeyboard()
            }
    }

    func submitTodo() {
        guard viewModel.addTodo(title: draftTitle) else { return }
        draftTitle = ""
        dismissKeyboard()
    }

    func dismissKeyboard() {
        isInputFocused = false
    }
}

struct PendingTodoListView_Previews: PreviewProvider {
    static var previews: some View {
        PendingTodoListView(viewModel: TodoListViewModel())
    }
}
