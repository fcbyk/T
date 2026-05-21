/**
 * if
 * Kotlin 中 if 可以作为表达式使用，可以直接返回值
 */

// if 用作表达式
val a = 10
val b = 20

val max = if (a > b) a else b  // max 会得到 20

// if 语句的标准用法
if (a < b) {
    println("a 小于 b")
} else {
    println("a 大于等于 b")
}