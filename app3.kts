/**
 * 比较运算符
 *
 * Kotlin 有两个“相等”概念
 *
 * ==  -> 调用 equals() 比较内容
 * === -> 比较对象引用（是否是同一个对象）
 */

fun demoCompare(a:Int, b:Int){

    println(a == b) // 内容相等
    println(a != b) // 内容不等

    println(a > b)  // 大于
    println(a < b)  // 小于
    println(a >= b) // 大于等于
    println(a <= b) // 小于等于
}

demoCompare(10,4)