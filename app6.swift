/**
 访问控制（Access Control）
 */
 
/**
 open: 跨模块访问 + 允许继承 / 重写（最宽松，常用于框架设计）
 */
open class AccessDemo {
    /**
     public: 跨模块访问，但不允许跨模块继承 / 重写
     */
    public var publicProperty = 1
    
    /**
     fileprivate:
     - 仅当前文件内可访问
     - 可以被同文件内的其他类型访问 / 继承 / 调用
     */
    fileprivate var info = "hello"
    
    /**
     internal（默认）:
     - 仅当前模块内可访问（App 内最常用）
     - internal 是可以被继承和重写的（在同一模块内）
     */
    var internalProperty = 2
    
    /**
     private: 仅当前作用域内可访问（最严格）
     */
    private var privateProperty = 3

    
    // 不同访问级别的方法
    public func publicMethod() {
        print("public method")
    }

    func internalMethod() {
        print("internal method")
    }

    private func privateMethod() {
        print("private method")
    }

    // 类内部可以访问所有级别
    func testInternalAccess() {
        print(publicProperty)
        print(internalProperty)
        print(privateProperty)

        publicMethod()
        internalMethod()
        privateMethod()
    }
}


public func app6() {
    let obj = AccessDemo()

    // ✅ 可以访问 public
    obj.publicMethod()
    print(obj.publicProperty)

    // ✅ 同模块下可以访问 internal
    obj.internalMethod()
    print(obj.internalProperty)

    // ❌ private 只能在类内部访问（取消注释会报错）
    // print(obj.privateProperty)
    // obj.privateMethod()

    // 通过类内部方法访问 private
    obj.testInternalAccess()
}
