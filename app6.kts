/**
 * 匿名函数
 * 匿名函数是另一种定义函数的方式，与 Lambda 类似但有一些区别
 */

// 匿名函数定义
val add = fun(a: Int, b: Int): Int {
    return a + b
}

println(add(2, 10))

/**
 * 显式 return
 * Lambda：最后一行是返回值
 * 匿名函数：需要明确的 return
 */
val anonymous = fun(x: Int): String {
    if (x > 0) {
        return "正数"  // 明确 return
    } else {
        return "非正数"
    }
}

/**
 * 特殊用法：立即执行函数
 */
val result = fun(x: Int, y: Int): Int {
    return x * y
}(3, 4)  // 立即调用，result = 12


/**
 * 匿名函数作为参数传递
 */
fun calculate(a: Int, b: Int, op: (Int, Int) -> Int): Int {
    return op(a, b)
}

// 使用匿名函数
val result1 = calculate(2, 3, add)
val result2 = calculate(10, 8, fun(x, y): Int {
    return if (x > y) x - y else y - x
})

println(result1)
println(result2)


/**
 * 匿名函数做返回值
 */
fun getMultiplier(factor: Int): (Int) -> Int {
    return fun(number:Int): Int {
        return number * factor
    }
}
val doubler = getMultiplier(2)
println(doubler(5))  // 输出 10
