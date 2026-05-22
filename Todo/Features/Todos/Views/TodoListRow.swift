import SwiftUI

struct TodoListRow: View {
    let todo: TodoItem
    let leadingSwipeAction: SwipeActionConfiguration
    let trailingSwipeAction: SwipeActionConfiguration

    var body: some View {
        HStack {
            Text(todo.title)
                .strikethrough(todo.isCompleted)
                .foregroundStyle(todo.isCompleted ? .secondary : .primary)

            Spacer()
        }
        .padding(.vertical, 4)
        .contentShape(Rectangle())
        .swipeActions(edge: .leading, allowsFullSwipe: true) {
            swipeButton(for: leadingSwipeAction)
        }
        .swipeActions(edge: .trailing, allowsFullSwipe: true) {
            swipeButton(for: trailingSwipeAction)
        }
    }

    @ViewBuilder
    func swipeButton(for configuration: SwipeActionConfiguration) -> some View {
        Button(role: configuration.role, action: configuration.action) {
            Label(configuration.title, systemImage: configuration.systemImage)
        }
        .tint(configuration.tint)
    }
}

struct SwipeActionConfiguration {
    let title: String
    let systemImage: String
    let tint: Color
    var role: ButtonRole? = nil
    let action: () -> Void
}
