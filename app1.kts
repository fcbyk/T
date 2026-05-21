// Kotlin 的注释基本和 Java 一样
// 这是单行注释

/*
这是多行注释
可以写很多行
*/

/**
 * 计算两个数的和（文档注释（KDoc））
 * @param a 第一个数字
 * @param b 第二个数字
 * @return 两数之和
 */
fun add(a: Int, b: Int): Int {
    return a + b
}


/*
外层注释（Kotlin 支持嵌套多行注释，Java 不支持）
    /*
    内层注释
    */
*/