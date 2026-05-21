/**
 * Lambda
 * Lambda 是匿名函数，常用来简化高阶函数调用
 * 语法：{ 参数 -> 表达式 }
 */

// 无类型推导
val sum1: (Int, Int) -> Int = { x, y -> x + y }
println(sum1(3, 4))

// 更简洁的写法（利用类型推导）
val sum2 = { a: Int, b: Int -> a + b }
println(sum2(1, 3))


/**
 * 隐式返回
 * Lambda最后一行是返回值
 */
val lambda = { x: Int ->
    1+1
    if (x > 0) "正数" else "非正数"
    // 最后一行自动返回
}

println(lambda(10))


/**
 * Lambda 作为函数参数
 * 如果 Lambda 是函数的最后一个参数，可以移到括号外面
 */
fun calculate(x: Int, y: Int, op: (Int, Int) -> Int): Int {
    return op(x, y)
}
val result1 = calculate(10, 5, { a, b -> a * b })   // 标准写法
val result2 = calculate(10, 5) { a, b -> a * b }    // 约定写法
println(result1)
println(result2)

// 如果 Lambda 是唯一参数，括号可以完全省略
fun execute(block: () -> Unit) { block() }
execute({ println("Hello") })   // 标准写法
execute { println("Hello") }    // 约定写法


/**
 * 隐式参数 it
 * 当 Lambda 只有一个参数时，可以使用 it引用
 */
val numbers = listOf(1, 2, 3)
val doubled1 = numbers.map { number -> number * 2 } // 标准写法：明确指定参数名
val doubled2 = numbers.map { it * 2 }   // 简化写法：使用 it

/**
 * Lambda作为函数返回值
 */
fun getMultiplier(factor: Int): (Int) -> Int {
    return { number -> number * factor }
}
val doubler = getMultiplier(2)
println(doubler(5))  // 输出 10