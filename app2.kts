/**
 * 赋值运算符
 *
 * Kotlin 和 Java 一样支持复合赋值
 * 本质是：
 * a += b  ->  a = a + b
 */

fun demoAssign() {

    var a = 10

    a += 5   // 等价 a = a + 5
    println(a)

    a -= 3   // 等价 a = a - 3
    println(a)

    a *= 2   // 等价 a = a * 2
    println(a)

    a /= 4   // 等价 a = a / 4
    println(a)

    a %= 3   // 等价 a = a % 3
    println(a)
}

demoAssign()