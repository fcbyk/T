/**
 结构体
 和 C++ 结构体语法很像
 但是没有匿名结构体
 */
 
_ = {
    // 定义一个结构体
    struct Student {
        // 存储属性（存放数据）
        var name: String
        var age: Int
        let studentID: String  // 常量属性
        
        // 计算属性（不存数据，靠计算得出）
        var info: String {
            return "姓名：\(name)，年龄：\(age)，学号：\(studentID)"
        }
        
        // 普通方法（不修改自身属性）
        func study() {
            print("\(name) 正在学习")
        }
        
        // 可变方法（修改自身属性，必须加 mutating）
        mutating func changeAge(newAge: Int) {
            age = newAge
        }
        
        // 自定义构造器（初始化）
        init(name: String, age: Int, studentID: String) {
            self.name = name
            self.age = age
            self.studentID = studentID
        }
    }

    // 创建实例
    var stu = Student(name: "小明", age: 18, studentID: "2026001")

    // 访问属性
    print(stu.name)
    print(stu.info)

    // 调用方法
    stu.study()

    // 修改属性
    stu.name = "小红"
    stu.changeAge(newAge: 19)
    print(stu.info)
}()


_ = {
    // 定义一个协议（规定要实现什么）
    protocol Animal {
        // 必须实现的属性
        var name: String { get }
        // 必须实现的方法
        func makeSound()
    }
                           
    // 结构体 遵守 协议
    struct Dog: Animal {  // 这里就是：遵守 Animal 协议
        // 必须实现协议里的属性
        var name: String
        
        // 必须实现协议里的方法
        func makeSound() {
            print("\(name) 汪汪叫")
        }
    }

    // 使用
    let dog = Dog(name: "旺财")
    dog.makeSound()
}()

