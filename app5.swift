/****
 生命周期控制 defer
 */
public func app5() {
    
    // defer 基本用法
    func testDefer() {
        defer {
            print("最后执行")
        }
        print("先执行")
    }
    testDefer()

    // 多个 defer（后进先出）
    func testMultipleDefer() {
        defer { print("defer 1") }
        defer { print("defer 2") }
        defer { print("defer 3") }
        print("函数主体")
    }
    testMultipleDefer()

    // defer + 提前 return
    func testReturn() {
        defer {
            print("即使 return 也会执行")
        }
        print("准备 return")
        return
    }
    testReturn()

    // 实战模拟：资源释放
    func testResource() {
        print("打开资源")

        defer {
            print("关闭资源")
        }

        print("使用资源")
    }
    testResource()
}

app5()
