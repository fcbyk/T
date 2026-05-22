import SwiftUI

struct CompletedTodoListView: View {
    @ObservedObject var viewModel: TodoListViewModel

    var body: some View {
        NavigationStack {
            VStack(spacing: 16) {
                header
                content
            }
            .padding(.horizontal)
            .padding(.bottom)
        }
    }
}

private extension CompletedTodoListView {
    var header: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("已完成任务")
                .font(.largeTitle)
                .fontWeight(.bold)

            Text("右滑删除，左滑移回待办")
                .font(.subheadline)
                .foregroundStyle(.secondary)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(.top, 30)
    }

    /// 用 `@ViewBuilder` 按数据状态切换 UI：
    /// 有数据时显示列表，没数据时显示空状态。
    @ViewBuilder
    var content: some View {
        if viewModel.completedTodos.isEmpty {
            ContentUnavailableView(
                "还没有已完成任务",
                systemImage: "checkmark.circle",
                description: Text("待办完成后会显示在这里")
            )

            Spacer()
        } else {
            List(viewModel.completedTodos) { todo in
                TodoListRow(
                    todo: todo,
                    leadingSwipeAction: .init(
                        title: "删除",
                        systemImage: "trash",
                        tint: .red,
                        role: .destructive,
                        action: { viewModel.deleteTodo(id: todo.id) }
                    ),
                    trailingSwipeAction: .init(
                        title: "移回待办",
                        systemImage: "arrow.uturn.backward.circle",
                        tint: .orange,
                        action: { viewModel.markTodoPending(id: todo.id) }
                    )
                )
            }
            .listStyle(.plain)
        }
    }
}

struct CompletedTodoListView_Previews: PreviewProvider {
    static var previews: some View {
        CompletedTodoListView(viewModel: TodoListViewModel())
    }
}
