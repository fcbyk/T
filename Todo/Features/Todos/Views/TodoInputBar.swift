import SwiftUI

/// 任务输入区。
struct TodoInputBar: View {
    /// `@Binding` 表示这个值由父视图持有，当前视图只是读写它。
    @Binding var text: String

    /// `@FocusState.Binding` 是 `@FocusState` 派生出来的绑定值。
    /// 子视图拿到后，也能控制父视图中输入框的焦点状态。
    @FocusState.Binding var isTextFieldFocused: Bool

    let onSubmit: () -> Void

    var body: some View {
        HStack(spacing: 12) {
            TextField("输入任务", text: $text)
                .focused($isTextFieldFocused)
                .padding(.horizontal, 16)
                .padding(.vertical, 12)
                .background(inputBackground)
                .onSubmit(onSubmit)

            Button(action: onSubmit) {
                Image(systemName: "plus")
                    .font(.headline)
                    .foregroundStyle(.white)
                    .frame(width: 44, height: 44)
                    .background(addButtonBackground)
            }
            .disabled(isSubmitDisabled)
            .opacity(isSubmitDisabled ? 0.6 : 1)
        }
        .animation(.easeInOut(duration: 0.2), value: isSubmitDisabled)
    }
}

private extension TodoInputBar {
    var isSubmitDisabled: Bool {
        text.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty
    }

    var inputBackground: some View {
        RoundedRectangle(cornerRadius: 16)
            .fill(.ultraThinMaterial)
            .stroke(
                LinearGradient(
                    colors: [.white.opacity(0.5), .clear],
                    startPoint: .topLeading,
                    endPoint: .bottomTrailing
                ),
                lineWidth: 0.5
            )
    }

    var addButtonBackground: some View {
        Circle()
            .fill(Color.accentColor)
            .shadow(color: .accentColor.opacity(0.3), radius: 6, x: 0, y: 3)
    }
}
