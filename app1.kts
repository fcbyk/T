/**
 * fun 是关键字，用来声明函数，参数必须写类型
 * 语法： fun 函数名(参数名: 参数类型, ...): 返回类型
 */
fun sum(a: Int, b: Int): Int {
    return a + b
}


/**
 * 单行函数
 * 如果函数体只有一行，可以用 = 简写返回值
 */
fun multiply(a: Int, b: Int) = a * b


/**
 * 没有返回值的函数
 * 如果函数没有返回值，可以写 Unit 或者省略（类似 void）
 */
fun printHello(name: String) {
    println("Hello, $name")
}