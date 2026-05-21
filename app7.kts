/**
 * 函数引用（Function Reference）
 * 允许你将现有的命名函数作为值传递，就像传递 Lambda 一样
 * 使用 ::操作符获取函数引用
 */

fun isEven(number: Int): Boolean = number % 2 == 0

// 将函数作为值传递
val predicate = ::isEven

// 使用
println(predicate(4))  // 输出 true
println(predicate(5))  // 输出 false