// 定义异常：必须遵循 Error 协议

// 写法：枚举 + 遵循 Error
enum MyError: Error {
    case notFound       // 找不到
    case invalidAge(Int) // 非法年龄（带关联值）
}


// 抛出异常的函数
// 函数加 throws → 代表这个函数 可能抛异常
func checkAge(_ age: Int) throws -> Bool {
    if age < 0 || age > 150 {
        // 抛出异常：throw 错误case
        throw MyError.invalidAge(age)
    }
    return true
}


// 捕获异常：用 do-catch 包裹
_ = {
    do {
        // 调用前加 try
        let result = try checkAge(200)
        print("正常：\(result)")
    } catch MyError.invalidAge(let age) {
        // 精准捕获指定错误
        print("年龄非法：\(age)")
    } catch {
        // 兜底捕获其他错误
        print("其他错误：\(error)")
    }
}()


// 简写
_ = {

    // try? 不关心错误，成功有值, 失败返回 nil
    let result1 = try? checkAge(20)  // Optional(true)
    let result2 = try? checkAge(200) // nil
    print(result1 ?? "失败")
    print(result2 ?? "失败")

    // try! 强行运行（崩溃风险）
    // try! → 确信不会报错，报错直接崩溃
    let ok = try! checkAge(20)
    print(ok)
}()


// 重抛异常：函数不处理，继续往外抛
_ = {
    enum MyError: Error {
        case testError
    }

    func canThrow() throws {
        throw MyError.testError
    }

    // rethrows → 接收一个 throws 函数，自己不处理，继续往外抛
    func execute(_ fn: () throws -> Void) rethrows {
        try fn() // 抛给上层
    }
}()


// 自动释放资源：defer（最后一定执行）
_ = {
    func work() throws {
        defer {
            // 无论成功/失败，最后一定执行
            print("收尾：关闭文件/网络/数据库")
        }
        
        // 这里可以 throw
        print("干活...")
    }

    try? work()
}()