import SwiftUI

struct App7View: View {
    
    @State private var name = ""
    
    var body: some View {
        VStack(spacing: 30) {
            TextField("请输入名字", text: $name)
                .padding(15)
                .background(Color(.systemGray6))
                .cornerRadius(12)
                .shadow(color: Color.black.opacity(0.1), radius: 5, x: 0, y: 2)
                .padding(.horizontal, 30)
                .font(.system(size: 18))
            
            Text("你好 \(name)")
                .font(.title)
                .fontWeight(.semibold)
                .foregroundColor(.blue)
                .padding()
                .background(Color(.systemGray5))
                .cornerRadius(12)
                .shadow(color: Color.black.opacity(0.1), radius: 5, x: 0, y: 2)
        }
        .padding(.top, 50)
    }
}

#Preview {
    App7View()
}
