/**
 * 接口（interface）
 * 接口可以声明方法，也可以有默认实现
 * 类可以实现多个接口（支持多继承）
 */

// 接口定义
interface Drivable {
    fun drive()
    fun stop() {
        println("Vehicle stopped")  // 默认实现
    }
}

class Car(val brand: String) : Drivable {
    override fun drive() {
        println("$brand is driving")
    }
}

class Bike(val brand: String) : Drivable {
    override fun drive() {
        println("$brand is riding")
    }
}

val main = fun() {
    val vehicles: List<Drivable> = listOf(
        Car("Toyota"),
        Bike("Giant")
    )
    for (v in vehicles) {
        v.drive()  // 根据实际对象类型调用对应的实现
        v.stop()   // 调用默认实现
    }
}()

/**
 * 接口多态
 * 接口类型的引用可以指向实现类对象
 * 调用接口方法时，实际执行的是实现类的方法（动态绑定）
 */
val d: Drivable = Car("Honda")
d.drive()  // 输出: Honda is driving


/**
 * 类与接口结合使用
 * 类既可以继承父类，也可以实现接口
 * 多态可以同时通过父类和接口实现
 */
open class Person(val name: String)

interface Speaker {
    fun speak(): Speaker
}

interface Player {
    fun running(): Player
}

class Teacher(name: String) : Person(name), Speaker,Player {
    override fun speak(): Teacher {
        println("$name is teaching")
        return this
    }

    override fun running(): Teacher {
        println("$name is running")
        return this
    }

    override fun toString(): String {
        return "Teacher(name=$name)"
    }
}

// 在 Kotlin 脚本中，表达式的值如果没有被赋给变量或显式 println
// IDE 会自动把它打印出来，它调用的就是对象的 toString() 方法
Teacher(name = "Toyota").running().speak()