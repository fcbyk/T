/**
 * is 运算符
 *
 * 判断变量类型
 * 类似 Java 的 instanceof
 */

fun demoType(x:Any){

    println(x is Int)     // 是否是 Int

    println(x !is String) // 是否不是 String

}

demoType(10)