/**
 结构体 vs 类
 结构体：值类型（栈），自动生成 memberwise 构造函数
 类：引用类型（堆），需要手动定义构造函数
 结构体更适合简单的数据容器
 */


// 结构体（值类型）
struct Point {
    var x: Double
    var y: Double
    
    // 结构体自动生成 memberwise 构造函数
    // Point(x: 1.0, y: 2.0)
    
    // 自定义方法
    mutating func moveBy(x deltaX: Double, y deltaY: Double) {
        x += deltaX
        y += deltaY
    }
}

// 类（引用类型）
class Person {
    var name: String
    var age: Int
    
    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
    
    func introduce() {
        print("我是 \(name)，\(age) 岁")
    }
}

// 值类型示例
let point1 = Point(x: 0, y: 0)
var point2 = point1  // 复制（值拷贝）
point2.x = 10
point2.y = 20
print("point1: (\(point1.x), \(point1.y))")  // (0, 0)
print("point2: (\(point2.x), \(point2.y))")  // (10, 20)


// 引用类型示例
let person1 = Person(name: "小明", age: 20)
let person2 = person1  // 引用复制（指向同一对象）
person2.name = "小红"
person2.age = 21
print("person1: \(person1.name), \(person1.age)")  // 小红, 21
print("person2: \(person2.name), \(person2.age)")  // 小红, 21
print("person1 === person2: \(person1 === person2)")  // true
