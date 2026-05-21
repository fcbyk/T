/**
 * 基本数据类型（Primitive Types）
 * 整型、浮点型、布尔
 * 单个字符、字符串
 */

val a: Int = 100
val b: Long = 1000000L
val c: Short = 100
val d: Byte = 1

val e: Double = 3.14
val f: Float = 3.14F

val flag: Boolean = true
val ch: Char = 'A'
val str: String = "Hello"

/**
 * Kotlin 严格区分类型
 * 不会自动把 Int 转成 Long，需要显式转换
 */
val x: Int = 10
val y: Long = x.toLong() // 显式转换