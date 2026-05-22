import Foundation
import Combine

/// `@MainActor` 表示这个类型的实例方法默认在主线程执行。
/// UI 状态更新必须回到主线程，因此 ViewModel 常常会加这个注解。
@MainActor
final class TodoListViewModel: ObservableObject {
    /// `@Published` 会在属性变化时自动通知界面刷新。
    /// `private(set)` 表示外部可以读，但只能在类型内部修改。
    @Published private(set) var todos: [TodoItem] {
        didSet {
            guard todos != oldValue else { return }
            scheduleSave()
        }
    }

    private let storage: TodoStoring
    private var saveTask: Task<Void, Never>?

    /// 用计算属性派生待办列表，避免维护多份状态。
    var pendingTodos: [TodoItem] {
        todos.filter { !$0.isCompleted }
    }

    var completedTodos: [TodoItem] {
        todos.filter(\.isCompleted)
    }

    init(storage: TodoStoring? = nil) {
        let resolvedStorage = storage ?? TodoStorage()

        self.storage = resolvedStorage
        self.todos = resolvedStorage.loadTodos() ?? Self.defaultTodos
    }

    func addTodo(title: String) -> Bool {
        let trimmedTitle = title.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !trimmedTitle.isEmpty else { return false }

        todos.insert(TodoItem(title: trimmedTitle), at: 0)
        return true
    }

    func deleteTodo(id: UUID) {
        todos.removeAll { $0.id == id }
    }

    func markTodoCompleted(id: UUID) {
        updateTodo(id: id) { $0.isCompleted = true }
    }

    func markTodoPending(id: UUID) {
        updateTodo(id: id) { $0.isCompleted = false }
    }

    deinit {
        saveTask?.cancel()
    }
}

private extension TodoListViewModel {
    static let defaultTodos: [TodoItem] = [
        TodoItem(title: "买牛奶"),
        TodoItem(title: "完成 MVP")
    ]

    func updateTodo(id: UUID, mutate: (inout TodoItem) -> Void) {
        guard let index = todos.firstIndex(where: { $0.id == id }) else { return }
        mutate(&todos[index])
    }

    func scheduleSave() {
        let snapshot = todos
        let storage = storage

        saveTask?.cancel()
        saveTask = Task(priority: .utility) {
            do {
                // 延迟保存是一种简单防抖，避免用户连续操作时频繁触发磁盘 IO。
                try await Task.sleep(for: .milliseconds(250))
                try Self.persist(snapshot, with: storage)
            } catch is CancellationError {
                // 新一次编辑会取消旧任务，这种取消是预期行为。
            } catch {
                print("保存待办失败: \(error.localizedDescription)")
            }
        }
    }

    /// `nonisolated` 表示这个静态方法不受 `@MainActor` 隔离限制，
    /// 因此可以在后台任务里直接调用，不必再切回主线程。
    nonisolated static func persist(_ todos: [TodoItem], with storage: TodoStoring) throws {
        try storage.saveTodos(todos)
    }
}
