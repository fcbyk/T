/**
 * 运算符(swift特有的)
 */

/**
 * 空合运算符 (??) 用于在可选值为 nil 时提供默认值。
 * 它的工作原理是：如果可选值不为 nil，则返回可选值；否则返回默认值。
 */
_ = {
    let optionalInt: Int? = nil
    let defaultInt = 42
    let result = optionalInt ?? defaultInt
    print("使用空合运算符: \(result)")

    let optionalString: String? = "Hello"
    let greeting = optionalString ?? "World"
    print("可选字符串: \(greeting)")
}()

/**
 * 区间运算符 (Range Operators)
 * 闭区间运算符 (...) 包含起始值和结束值。
 * 半开区间运算符 (..<) 包含起始值但不包含结束值。
 */
_ = {
    // 闭区间运算符 (...)
    for i in 1...3 {
        print("闭区间: \(i)")
    }

    // 半开区间运算符 (..<)
    for i in 1..<3 {
        print("半开区间: \(i)")
    }

    // 单侧区间
    let array = [1, 2, 3, 4, 5]
    print("数组前两个元素: \(array[...2])")
    print("数组从索引2开始: \(array[2...])")
}()

/**
 * 类型转换运算符 (Type Casting Operators)
 * 条件类型转换 (as?) 尝试将值转换为指定类型，如果转换失败则返回 nil。
 * 强制类型转换 (as!) 尝试将值转换为指定类型，如果转换失败则触发运行时错误。
 * 向上转型 (as) 将子类实例转换为超类类型。
 */
_ = {
    // 条件类型转换 (as?)
    let anyValue: Any = "这是一个字符串"
    if let stringValue = anyValue as? String {
        print("类型转换成功: \(stringValue)")
    }

    // 强制类型转换 (as!)
    let anotherAny: Any = 123
    let intValue = anotherAny as! Int
    print("强制转换结果: \(intValue)")

    // 向上转型 (as)
    class Animal {}
    class Dog: Animal {}
    let dog = Dog()
    let animal: Animal = dog as Animal
    print("向上转型成功: \(animal)")
}()

/**
 * 可选链运算符 (Optional Chaining)
 * 可选链运算符 (?) 用于在可选值为 nil 时避免强制解包，而是返回 nil。
 * 它的工作原理是：如果可选值不为 nil，则继续执行后续操作；否则返回 nil。
 */
_ = {
    class Person {
        var name: String?
        var pet: Pet?
    }

    class Pet {
        var name: String?
        var age: Int?
    }

    let person = Person()
    person.name = "张三"
    person.pet = Pet()
    person.pet?.age = 3

    // 通过可选链访问属性
    let petName = person.pet?.name
    print("宠物名字: \(petName ?? "无")")

    // 通过可选链调用方法
    let petAge = person.pet?.age
    print("宠物年龄: \(petAge ?? 0)")
}()

/**
 * 恒等运算符 (用于类实例)
 * 恒等运算符 (===) 用于检查两个类实例是否引用同一个对象。
 * 非恒等运算符 (!==) 用于检查两个类实例是否引用不同的对象。
 */
_ = {
    class MyClass {}
    let obj1 = MyClass()
    let obj2 = obj1
    let obj3 = MyClass()

    print("obj1 与 obj2 是否相同: \(obj1 === obj2)")
    print("obj1 与 obj3 是否相同: \(obj1 === obj3)")
    print("obj1 与 obj2 是否不同: \(obj1 !== obj3)")
}()
