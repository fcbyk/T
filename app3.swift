// 总结：Swift 基础数据类型
// Int / Double / Bool / String / Character

_ = {
    // 类型注解：:Int 等价于 TS :number
    // 类型注解就是 :类型 和 TS 完全一样
    var age: Int = 20               // 显式注解
    var score = 99                  // 自动推断为 Int（和 TS 一样）
}()

_ = {
    // 基础数据类型
    var age: Int = 20               // 整数 Int
    var height: Double = 1.75       // 浮点数 Double（推荐，精度高）
    var money: Float = 100.0        // Float 用得少，除非需要节省内存
    var isStudent: Bool = true      // 布尔值 Bool (true / false)
    var name: String = "小明"       // 字符串 String

    // 字符 Character (单个字符/文字/表情，必须用 Character 注解)
    var letter: Character = "A"
    var emoji: Character = "🎉"
}