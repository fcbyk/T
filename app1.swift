/**
 类与对象
 基本语法：class 关键字
 属性：存储属性、计算属性
 方法：实例方法、类型方法
 ( 类可以写在函数里面：嵌套类 )
 */

_ = {
    // 定义一个简单的类
    class Person {
        // 存储属性
        var name: String
        var age: Int
        
        // 计算属性（只读）
        var info: String {
            return "\(name) 今年 \(age) 岁"
        }
        
        // 初始化方法
        init(name: String, age: Int) {
            self.name = name
            self.age = age
        }
        
        // 实例方法
        func sayHello() {
            print("你好，我是 \(name)")
        }
        
        // 类型方法（静态方法）
        static func description() {
            print("Person 类用于表示一个人")
        }
    }
    
    // 创建对象，没有new关键字
    let person = Person(name: "小明", age: 20)
    person.sayHello()
    print(person.info)
    
    // 调用类型方法
    Person.description()
}()
