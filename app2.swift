
_ = {
    // 最基础枚举（只有选项）
    enum Direction {
        case up
        case down
        case left
        case right
    }

    // 用法
    let dir1 = Direction.up
    let dir2: Direction = .down  // 已知类型，可以只写 .xxx

    // 简洁写法
    enum Dir {
        case up, down, left, right
    }

    print(dir1)
    print(dir2)
}()


_ = {
    // 带原始值（Raw Value）
    // 每个 case 绑定一个固定值：Int / String
    enum Grade: Int {
        case A = 90
        case B = 80
        case C = 70
    }

    // 用法
    let grade = Grade.A
    print(grade.rawValue) // 输出 90
}()


_ = {
    // 带关联值（Associated Value）
    // 每个 case 可以带不同数据
    enum Result {
        case success(String)   // 成功：带信息
        case failure(Int, String) // 失败：带码 + 信息
    }

    // 用法
    let res1 = Result.success("登录成功")
    let res2 = Result.failure(404, "页面不存在")
    print(res1) // 输出 success("登录成功")
    print(res2) // 输出 failure(404, "页面不存在")

    // 使用switch取出关联值
    switch res1 {
    case .success(let msg):
        print("成功信息：\(msg)")
        
    case .failure(let code, let msg):
        print("错误码：\(code)")
        print("错误信息：\(msg)")
    }

    // 用 if case 取出关联值
    // 语法：if case .枚举case(let 变量名) = 枚举对象 { }
    if case .success(let msg) = res1 {
        // 只有匹配到 .success 才会进入这里
        // msg 就是取出来的关联值
        print("成功信息：\(msg)")
    }

    if case .failure(let code, let msg) = res2 {
        // 取出两个关联值：code 和 msg
        print("错误码：\(code)")
        print("错误信息：\(msg)")
    }

    // 简写版
    // let 放前面：if case let .枚举case(变量) = 对象 { }
    if case let .success(msg) = res1 {
        print(msg)
    }

    if case let .failure(code, msg) = res2 {
        print(code, msg)
    }

    // ❌ 错误写法
    // 关联值不能直接 . 出来，必须用模式匹配（if case）
    // res1.success(let a)  // 报错！
    // print(a)

}()


_ = {
    // 枚举里可以写 属性 + 方法
    enum Animal {
        case dog
        case cat
        
        // 计算属性
        var sound: String {
            switch self {
            case .dog: return "汪汪"
            case .cat: return "喵喵"
            }
        }
        
        // 方法
        func makeSound() {
            print("叫声：\(sound)")
        }
    }

    let pet = Animal.dog
    print(pet.sound) // 汪汪
    pet.makeSound()  // 叫声：汪汪
}()