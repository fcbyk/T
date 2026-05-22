import Foundation

/// Todo 领域模型。
///
/// - `Identifiable`：让 `List` / `ForEach` 可以稳定识别每一行数据。
/// - `Codable`：让模型可以直接被 `JSONEncoder` / `JSONDecoder` 编解码。
/// - `Equatable`：便于比较新旧值，减少不必要的保存操作。
struct TodoItem: Identifiable, Codable, Equatable {
    let id: UUID
    let title: String
    var isCompleted: Bool

    init(id: UUID = UUID(), title: String, isCompleted: Bool = false) {
        self.id = id
        self.title = title
        self.isCompleted = isCompleted
    }
}
