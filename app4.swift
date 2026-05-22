/**
 协议（Protocol）
 定义接口规范
 类、结构体、枚举都可以遵循协议
 协议继承
 */


/**
定义协议
struct 遵循协议时，如果方法会修改自身，协议里必须标记 mutating
class（引用类型）修改属性 ≠ 修改自身 不需要 mutating
struct（值类型）修改属性 = 修改整个自身  必须 mutating
*/
protocol Drivable {
    var speed: Double { get set }
    func start()
    mutating func stop()
    mutating func accelerate(by amount: Double)
}

// 协议继承
protocol ElectricVehicle: Drivable {
    var batteryLevel: Double { get }
    func charge()
}

// 类遵循协议
class Car: Drivable {
    var speed: Double = 0.0
    
    func start() {
        print("汽车启动")
    }
    
    func stop() {
        print("汽车停止")
        speed = 0
    }
    
    func accelerate(by amount: Double) {
        speed += amount
        print("汽车加速到 \(speed) km/h")
    }
}

// 结构体遵循协议
struct Bike: Drivable {
    var speed: Double = 0.0
    
    func start() {
        print("自行车开始骑行")
    }
    
    mutating func stop() {
        print("自行车停止")
        speed = 0
    }
    
    mutating func accelerate(by amount: Double) {
        speed += amount
        print("自行车速度: \(speed) km/h")
    }
}

// 遵循多个协议
class ElectricCar: Drivable, ElectricVehicle {
    var speed: Double = 0.0
    var batteryLevel: Double = 100.0
    
    func start() {
        print("电动车启动")
    }
    
    func stop() {
        print("电动车停止")
        speed = 0
    }
    
    func accelerate(by amount: Double) {
        speed += amount
        batteryLevel -= amount * 0.01
        print("电动车速度: \(speed) km/h, 电量: \(batteryLevel)%")
    }
    
    func charge() {
        batteryLevel = 100.0
        print("电动车已充满电")
    }
}

// 使用
let car = Car()
car.start()
car.accelerate(by: 50)
car.stop()

var bike = Bike()
bike.start()
bike.accelerate(by: 20)
bike.stop()

let electricCar = ElectricCar()
electricCar.start()
electricCar.accelerate(by: 30)
electricCar.charge()
