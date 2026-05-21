/**
 * 可变数量参数
 * 在 Kotlin 中，可变数量参数允许函数接收不定数量的同一类型参数
 * 这通过 vararg修饰符实现
 */

fun sumAll(vararg numbers: Int): Int {
    var sum = 0
    for (num in numbers) {
        sum += num
    }
    return sum
}

println(sumAll(1, 2, 3, 4))
println(sumAll(10, 20))
