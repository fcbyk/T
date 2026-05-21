/**
 * 高阶函数（Higher-Order Functions）
 * 函数可以作为参数传入另一个函数，或者函数可以作为返回值返回
 */

// 函数作为参数
fun operate(a: Int, b: Int, op: (Int, Int) -> Int): Int {
    return op(a, b)
}

fun add(a: Int, b: Int): Int{
    return a + b
}

// 使用 :: 获取函数引用，或使用 Lambda
val result = operate(3, 5, ::add)
println(result)  // 输出 8


// 函数作为返回值
fun getMultiplier(factor: Int): (Int) -> Int {
    // 先定义一个命名函数
    fun multiplier(number: Int): Int {
        return number * factor
    }

    // 然后返回它的引用
    return ::multiplier
}

val doubler = getMultiplier(2)
println(doubler(5))  // 输出 10