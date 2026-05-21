/**
 * 常量（Constants）
 * 在 Kotlin 中，常量通常用 const val 来声明
 * val 是运行时不可变变量（运行时赋值一次即可），可以在函数内部
 * const val 是编译期常量，不能在函数内部声明。
 */

object App {
    const val PI = 3.14159
    const val MAX_USER = 1000
}

fun main() {
    println("PI is ${App.PI}")
}

main()