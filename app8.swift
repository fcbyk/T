/**
 多态（Polymorphism）

 核心概念：
 - 父类类型可以指向子类对象
 - 同一个方法调用，不同对象表现不同

 实现条件：
 1. 继承（class）
 2. 方法重写（override）
 3. 父类引用指向子类实例

 本质：
 - 编译时：看类型（Animal）
 - 运行时：看实际对象（Dog / Cat）
 */

// 基类（父类）：定义统一接口
class Animal {
    var name: String
    
    init(name: String) {
        self.name = name
    }
    
    func makeSound() {
        print("\(name) 发出声音")
    }
}

// 子类：Dog（重写父类方法，实现不同表现）
class Dog: Animal {
    override func makeSound() {
        print("\(name) 汪汪叫")
    }
}

// 子类：Cat（重写父类方法，实现不同表现）
class Cat: Animal {
    override func makeSound() {
        print("\(name) 喵喵叫")
    }
}

// 多态演示函数（核心：父类类型调用子类实现）
public func app8() {
    // 父类类型数组，存放不同子类对象
    // 关键：统一用 Animal 类型接收
    let animals: [Animal] = [
        Dog(name: "旺财"),
        Cat(name: "咪咪"),
        Animal(name: "动物")
    ]
    
    // 多态调用：
    // 虽然类型是 Animal，但实际执行的是子类的实现
    for animal in animals {
        animal.makeSound()
    }
    /**
     输出结果：
     旺财 汪汪叫   （Dog）
     咪咪 喵喵叫   （Cat）
     动物 发出声音 （Animal）

     说明：
     - 同一段代码
     - 根据对象不同，行为不同（多态）
     */
}

app8()