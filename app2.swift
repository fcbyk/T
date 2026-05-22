/**
 构造函数与初始化
 函数可以重载
 */

class Person {
    let name: String
    var age: Int
    
    /**
    指定构造函数
    必须调用父类构造器（super.init）
    */
    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
    
    /**
    便利构造函数（convenience）
    必须调用本类的构造器
    */
    convenience init(name: String) {
        self.init(name: name, age: 18)
    }
    convenience init() {
        // 链式调用：init() → init(name:) → init(name:age:)
        self.init(name: "匿名")
    }
    
    /**
    可失败构造函数
    条件不满足返回空
    */
    convenience init?(name: String, adultAge: Int) {
        guard adultAge >= 18 else { return nil }
        self.init(name: name,age: adultAge)
    }
    
    /**
    必要构造器
    子类必须实现
    */
    required init(name:String, placeholder:Bool){
        self.name = name
        self.age = 0
    }
}

class Student: Person {
    var score: Int
    
    init(name: String, age: Int, score: Int) {
        self.score = score
        super.init(name: name, age: age)
    }
    
    // 必须实现 required
    required init(name: String, placeholder: Bool) {
        self.score = 0
        super.init(name: name, placeholder: placeholder)
    }
}

let p1 = Person(name: "小明", adultAge: 20)
print(p1 != nil ? "创建成功" : "创建失败")

let p2 = Person(name: "小红", adultAge: 10)
print(p2 != nil ? "创建成功" : "创建失败")

