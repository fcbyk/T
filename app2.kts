/**
 * 默认参数和命名参数
 * 和 python 一样
 */

fun greet(name: String = "World") {
    println("Hello, $name")
}

// 调用函数
greet()           // 输出: Hello, World
greet("Kotlin")   // 输出: Hello, Kotlin

// 使用命名参数
greet(name = "小明")