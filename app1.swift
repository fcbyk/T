// 泛型函数 基础语法
// 作用：一个函数支持任意类型
_ = {
    // 语法：函数名<占位符>(参数: 占位符)
    // T = 类型占位符（随便写 T/E/Element 都行）
    func printValue<T>(value: T) {
        print("传入的类型：\(type(of: value))，值：\(value)")
    }

    // 使用：自动推断 T 类型
    printValue(value: 10)    // T = Int
    printValue(value: "Hi")  // T = String
}()


// 泛型函数：多个同类型参数
_ = {
    // T 代表：a 和 b 必须是**同一种类型**
    func swap<T>(_ a: inout T, _ b: inout T) {
        let temp = a
        a = b
        b = temp
    }

    var x = 1, y = 2
    swap(&x, &y)
    print("交换后：\(x), \(y)")
}()


// 泛型结构体（最常用容器写法）
_ = {
    // 语法：结构体名<Element>
    // Element = 这个结构体要存储的类型占位符
    struct Box<Element> {
        // 属性用 Element 代表类型
        var content: Element
        
        // 方法参数/返回值也用 Element
        func getContent() -> Element {
            return content
        }
    }

    // 使用：Box<Int> 代表把 Element 换成 Int
    let intBox = Box<Int>(content: 100)
    let strBox = Box(content: "字符串") // 自动推断

    print(intBox.getContent())
    print(strBox.getContent())
}()


// 泛型类（和结构体语法一样）
_ = {
    class Person<ID> {
        var id: ID
        init(id: ID) {
            self.id = id
        }
    }

    let p1 = Person(id: 123)    // ID = Int
    let p2 = Person(id: "abc")  // ID = String
    print(p1.id, p2.id)
}()


// 泛型约束（限制 T 必须是某种类型）
_ = {
    // 语法：<T: 协议/类>
    // T: Equatable 代表：T 必须遵守 Equatable 协议（可比较 ==）
    func isSame<T: Equatable>(_ a: T, _ b: T) -> Bool {
        return a == b
    }

    print(isSame(5, 5))
    print(isSame("A", "B"))
}()


// 多个泛型参数（用逗号分隔）
_ = {
    // <T, U> 两个不同类型占位符
    func makePair<T, U>(a: T, b: U) -> (T, U) {
        return (a, b)
    }

    let pair = makePair(a: 18, b: "年龄")
    print(pair)
}()


// 泛型枚举（带泛型关联值）
_ = {
    // 枚举也能泛型：Success 是成功值的类型
    enum Result<Success> {
        case success(Success)
        case fail
    }

    let res1 = Result.success("数据") // Success = String
    let res2 = Result.success(100)    // Success = Int
    print(res1, res2)
}()