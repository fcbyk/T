/**
 * Kotlin 最重要的运算符之一
 *
 * ?.   安全调用
 * ?:   Elvis 默认值
 * !!   强制非空（可能抛异常）
 */

fun demoNull(){

    val name:String? = null

    println(name?.length) // 安全调用，不会崩

    println(name ?: "default") // null 时返回默认值

    // println(name!!.length)
    // !! 强制认为不是 null
    // 如果是 null 会抛 NullPointerException
}

demoNull()