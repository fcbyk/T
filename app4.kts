/**
 * 继承基础（open + :）
 * Kotlin 默认类不可被继承（final）
 * 需要使用 open 显式打开
 */

open class Animal(var name: String) {
    fun eat() {
        println("$name is eating")
    }
}

// 如果父类有构造参数，子类必须把参数传给父类
// 父类构造函数要什么，子类就必须给什么
class Dog(name: String) : Animal(name) {
    fun bark() {
        println("$name is barking")
    }
}

val dog = Dog("Buddy")
dog.eat()
dog.bark()