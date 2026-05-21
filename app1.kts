/**
 * 基本使用
 * 类 + 属性 + 方法
 */

// 定义类
class Person {
    // 成员属性
    var name: String = "unknown"
    var age: Int = 0
    val info = "只读属性"

    // 成员方法
    fun sayHello() {
        println("Hello, my name is $name, age is $age")
    }
}

// 创建对象
val p = Person()
p.name = "Cola"
p.age = 18
p.sayHello()

// 修改只读属性会报错
// p.info = "hello"