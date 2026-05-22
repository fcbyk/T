/**
 计算属性与属性观察器
 存储属性 vs 计算属性
 属性观察器：willSet、didSet
 延迟存储属性：lazy
 */


class Circle {
    // 存储属性：直接在内存里存一个值
    var radius: Double
    
    // 计算属性（只读）：不存值，每次访问时“现算”
    var area: Double {
        return Double.pi * radius * radius
    }
    
    // 计算属性（读写）
    var diameter: Double {
        get {
            return radius * 2
        }
        set {
            radius = newValue / 2
        }
    }
    
    // 属性观察器
    // willSet → 真正赋值 → didSet
    var color: String = "red" {
        // 修改前触发
        willSet {
            print("颜色将从 \(color) 变为 \(newValue)")
        }
        // 修改后触发
        didSet {
            print("颜色已从 \(oldValue) 变为 \(color)")
        }
    }
    
    // 延迟存储属性
    // 第一次访问就确定值，后面即使修改了 radius，也不会重新计算
    lazy var description: String = {
        return "半径为 \(radius) 的圆，面积约为 \(area)"
    }()
    
    init(radius: Double) {
        self.radius = radius
    }
}

let circle = Circle(radius: 5.0)
print("面积: \(circle.area)")
print("直径: \(circle.diameter)")

circle.diameter = 20
print("半径变为: \(circle.radius)")

circle.color = "blue"

print("描述: \(circle.description)")
