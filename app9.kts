/**
 * 位运算符
 *
 * Kotlin 不使用 & | ^
 * 而是使用函数
 *
 * a and b
 * a or b
 * a xor b
 *
 * and 不是普通函数，而是 infix 函数
 * Kotlin 允许某些函数使用 中缀调用（infix notation）
 * a and b 等价于 a.and(b)
 */

fun demoBit(){

    val a = 5   // 二进制 0101
    val b = 3   // 二进制 0011

    println(a and b) // 与运算 -> 0001 -> 1

    println(a or b)  // 或运算 -> 0111 -> 7

    println(a xor b) // 异或 -> 0110 -> 6
}

demoBit()


/**
 * 位移运算
 *
 * shl  左移
 * shr  右移（带符号）
 * ushr 无符号右移
 */

fun demoShift(){

    val a = 5  // 00000101

    println(a shl 1)
    // 左移一位
    // 00001010 -> 10

    println(a shr 1)
    // 右移一位
    // 00000010 -> 2

    println(a ushr 1)
    // 无符号右移
    // 正数结果和 shr 一样
}

demoShift()


/**
 * 位取反
 *
 * inv() 会把所有位取反
 */

fun demoInv(){

    val a = 5

    println(a.inv())

}

demoInv()