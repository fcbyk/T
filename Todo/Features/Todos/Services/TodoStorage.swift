import Foundation

/// `Sendable` 用来描述“这个值可以安全地跨并发边界传递”。
/// 这里保存逻辑会被后台 `Task` 调用，因此协议也显式声明为 `Sendable`。
protocol TodoStoring: Sendable {
    nonisolated func loadTodos() -> [TodoItem]?
    nonisolated func saveTodos(_ todos: [TodoItem]) throws
}

/// 基于本地 JSON 文件的持久化实现。
struct TodoStorage: TodoStoring {
    private let saveURL: URL

    nonisolated init(fileManager: FileManager = .default) {
        let baseURL =
            fileManager.urls(for: .applicationSupportDirectory, in: .userDomainMask).first
            // `??` 是空合并运算符。
            // 左边如果不是 `nil` 就取左边；如果是 `nil` 就退回到右边的默认值。
            ?? fileManager.urls(for: .documentDirectory, in: .userDomainMask).first!
        let bundleIdentifier = Bundle.main.bundleIdentifier ?? "Todo"

        saveURL = baseURL
            .appendingPathComponent(bundleIdentifier, isDirectory: true)
            .appendingPathComponent("todos.json")
    }

    nonisolated func loadTodos() -> [TodoItem]? {
        guard FileManager.default.fileExists(atPath: saveURL.path) else {
            return nil
        }

        do {
            let data = try Data(contentsOf: saveURL)
            return try JSONDecoder().decode([TodoItem].self, from: data)
        } catch {
            print("加载待办失败: \(error.localizedDescription)")
            return nil
        }
    }

    nonisolated func saveTodos(_ todos: [TodoItem]) throws {
        let directoryURL = saveURL.deletingLastPathComponent()
        try FileManager.default.createDirectory(at: directoryURL, withIntermediateDirectories: true)

        let data = try JSONEncoder().encode(todos)
        try data.write(to: saveURL, options: .atomic)
    }
}
