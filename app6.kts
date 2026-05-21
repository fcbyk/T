/**
 * 可见性控制（访问修饰符）
 * public（默认）   哪都能访问
 * private         只能在当前类内部访问
 * protected       子类可以访问
 * internal        同一个模块内可见
 */

open class Person(
    public var name: String = "Cola",
    private var age: Int = 18
) {
    open protected fun sayHello() {
        println("Hello, ${name}!")
    }

    internal fun age(age: Int) {
        println("Age $age")
    }

    // setter 和 getter方法
    fun setAge(age: Int) {
        this.age = age
    }

    fun getAge(): Int {
        return this.age
    }
}

var main = fun(){
    val p = Person()
    p.setAge(29)
    println(p.getAge())
}()



/**
 * 构造函数可见性
 */
class Person private constructor(val name: String) {
    // 外部无法直接实例化
    companion object {
        fun create(name: String) = Person(name)
    }
}

main = fun() {
    // val p = Person("Alice") // ❌ 编译错误
    val p = Person.create("Alice") // ✅ 使用工厂方法
}()