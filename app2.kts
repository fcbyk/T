/**
 * when
 * when 是 Kotlin 的增强版 switch
 * 可以匹配值、范围、类型等，且可以作为表达式使用
 */

val x = 2

when (x) {
    1 -> println("x 是 1")
    2, 3 -> println("x 是 2 或 3")
    in 4..10 -> println("x 在 4 到 10 之间")
    else -> println("x 不在以上范围")
}

// 当作表达式
val result = when (x) {
    1 -> "一"
    2 -> "二"
    else -> "其他"
}