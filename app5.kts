/**
 * 方法重写（override）
 * 改写父类方法也必须 open
 */

open class Animal(var name: String) {
    open fun eat() {
        println("$name is eating")
    }

    open fun info(){
        println("Animal info")
    }
}

class Dog(name: String) : Animal(name) {
    override fun eat() {
        println("$name is eating bones")
    }

    override fun info() {
        // 调用父类方法（super）
        super.info()
        println("Dog info")
    }
}

var main = fun(){
    val dog = Dog("Buddy")
    dog.eat()
    dog.info()
}()


/**
 * 属性重写（Property Overriding）
 * Kotlin 允许 属性被子类重写，前提是父类属性标记了 open 或 abstract
 */
open class Person(open val name: String) {
    open val greeting: String
        get() = "Hello, $name"
}

class Student(override val name: String, val grade: Int) : Person(name) {
    override val greeting: String
        get() = "Hi, I'm $name and in grade $grade"
}

main = fun() {
    val p: Person = Student("Alice", 10)
    println(p.greeting)  // 输出: Hi, I'm Alice and in grade 10
}()