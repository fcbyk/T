/**
 * 抽象类（abstract class）
 * abstract class 是 不能实例化的类，用作父类。
 * 可以包含：
 * 抽象方法（没有实现，必须由子类实现）
 * 普通方法（有实现，可直接继承或重写）
 * 抽象属性（没有初始值，必须由子类实现）
 * 子类继承时，必须实现抽象成员。
 */

abstract class Animal {
    abstract val name: String  // 抽象属性
    abstract fun sound()       // 抽象方法

    fun description() {        // 普通方法
        println("I am an animal named $name")
    }
}

class Dog : Animal() {
    override val name: String = "Buddy"  // 实现抽象属性
    override fun sound() {               // 实现抽象方法
        println("Woof Woof")
    }
}

var main = fun() {
    val dog: Animal = Dog()
    dog.description()  // 调用父类普通方法
    dog.sound()        // 调用子类实现方法
}()