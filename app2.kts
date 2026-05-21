/**
 * 主构造函数
 * 构造函数直接写在类名后面
 * var name: String → 自动变成成员变量
 */

class Person(var name: String, var age: Int) {

    // init 初始化代码块
    // init 会在对象创建时执行
    init {
        println("Person created: $name")
    }

    fun sayHello() {
        println("Hello, my name is $name, age is $age")
    }
}

val p = Person("Cola", 18)
p.sayHello()



