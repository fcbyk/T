/**
 *  匿名对象（Object Expression）
 *  类似 JS 的字面量对象，可以直接创建一个“临时对象”，不需要先定义类
 * 	可以重写方法或添加属性
 */
open class Greeter {
    open fun greet() {
        println("Hello")
    }
}

var main = fun() {
    val greeter = object : Greeter() {  // 匿名对象，继承 Greeter
        override fun greet() {
            println("Hi, I'm an anonymous greeter")
        }
        val extraProperty: String = "Extra"
    }

    greeter.greet()              // Hi, I'm an anonymous greeter
    println(greeter.extraProperty) // Extra
}()


/**
 * 匿名对象实现接口
 */
interface Clickable {
    fun click()
}

main = fun() {
    val button = object : Clickable {
        override fun click() {
            println("Button clicked!")
        }
    }

    button.click()  // Button clicked!
}()

/**
 * 单例对象（Object Declaration）
 * JS 里常用对象字面量保存状态，Kotlin 用 object 声明单例
 */
object AppConfig {
    val version = "1.0"
    fun printVersion() {
        println("Version: $version")
    }
}

main = fun(){
    AppConfig.printVersion()  // Version: 1.0
}()