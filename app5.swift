/**
 扩展（Extension）
 为已有的类、结构体、协议、枚举添加功能
 */

// 现有类
private class Person {
    var name: String
    var age: Int
    
    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
}

// 为 Person 扩展
extension Person {
    
    // ❌ 不能添加存储属性
    // var height: Int = 180
    
    // ❌ extension 不能 override 方法
    
    // 添加计算属性
    var isAdult: Bool {
        return age >= 18
    }
    
    // extension 可以加构造器，但只能是 convenience
    convenience init(name: String) {
        self.init(name: name, age: 0)
    }
    
    // 添加方法
    func introduce() {
        print("大家好，我叫 \(name)，今年 \(age) 岁")
    }
    
    // 添加嵌套类型
    enum Gender {
        case male, female
    }
    
    var ageDescription: String {
        return isAdult ? "成年人" : "未成年人"
    }
}

// 为 Int 扩展
extension Int {
    var isEven: Bool {
        return self % 2 == 0
    }
    
    func squared() -> Int {
        return self * self
    }
    
    func times(_ action: () -> Void) {
        for _ in 0..<self {
            action()
        }
    }
}

// 给协议提供默认实现
protocol Greetable {
    func greet()
}
extension Greetable {
    func greet() {
        print("默认打招呼")
    }
}

// extension 可以“让已有类遵循协议”
protocol Runnable {
    func run()
}
extension Person: Runnable {
    func run() {
        print("\(name) 在跑")
    }
}


public func app5() {
    let person = Person(name: "小明", age: 20)
    person.introduce()
    print("是否成年: \(person.isAdult)")
    print("年龄描述: \(person.ageDescription)")
    
    let number = 42
    print("\(number) 是偶数吗: \(number.isEven)")
    print("\(number) 的平方: \(number.squared())")
    3.times {
        print("Hello")
    }
    
    class Student: Greetable {}
    let s = Student()
    s.greet() // 不用实现也能用
}

app5()
