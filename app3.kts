/**
 * 类方法（companion object）
 * Kotlin 没有真正的 static（静态方法）
 * 用的是：companion object（伴生对象）来实现“类方法”效果
 */

class Person(var name: String, var age: Int) {

    fun sayHello() {
        println("Hello, my name is $name, age is $age")
    }

    companion object {
        fun createDefaultPerson(): Person {
            return Person("Default", 0)
        }

        fun createAdult(name: String): Person {
            return Person(name, 18)
        }

        fun createChild(name: String): Person {
            return Person(name, 10)
        }
    }
}

val p1 = Person.createChild("小鸣")
p1.sayHello()