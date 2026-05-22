/**
 继承
 */    

// 父类
class Animal {
    var name: String

    init(name: String) {
        self.name = name
    }

    func makeSound() {
        print("动物发出声音")
    }

    func eat() {
        print("动物在吃东西")
    }
}

// 子类继承 Animal
class Dog: Animal {
    // 重写初始化方法
    override init(name: String) {
        super.init(name: name)
    }
    
    // 重写方法
    override func makeSound() {
        super.makeSound()
        print("\(name) 汪汪叫")
    }
    
    // 子类特有的方法
    func wagTail() {
        print("\(name) 摇尾巴")
    }
}

class Cat: Animal {
    // 添加属性观察器
    override var name: String {
        didSet {
            print("猫的名字从 \(oldValue) 改为 \(name)")
        }
    }
    
    override func makeSound() {
        print("\(name) 喵喵叫")
    }
    
    func climbTree() {
        print("\(name) 爬树")
    }
}

class Bird: Animal {
    // final 关键字，禁止继承或重写
    final func fly() {
        print("\(name) 在飞")
    }
}


let dog = Dog(name: "旺财")
dog.makeSound()
dog.eat()
dog.wagTail()

let cat = Cat(name: "咪咪")
cat.makeSound()
cat.eat()
cat.climbTree()
cat.name = "小花"  // 触发属性观察器
