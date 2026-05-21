/**
 * 多态
 * 父类引用可以指向子类对象
 * 调用被 override 的方法时，会运行子类的实现
 */

// 父类
open class Person(val name: String) {
    open fun greet() {
        println("Hello, my name is $name")
    }
}

// 子类1
class Student(name: String, val grade: Int) : Person(name) {
    override fun greet() {
        println("Hi, I'm $name and in grade $grade")
    }
}

// 子类2
class Teacher(name: String, val subject: String) : Person(name) {
    override fun greet() {
        println("Hello, I'm $name and I teach $subject")
    }
}

val main = fun(){
    // 父类引用指向不同子类对象
    val people: List<Person> = listOf(
        Student("Alice", 5),
        Teacher("Mr. Smith", "Math"),
        Person("Bob")
    )

    // 多态调用
    for (p in people) {
        p.greet()  // 根据实际对象类型调用对应的实现
    }
}()