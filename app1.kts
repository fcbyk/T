/**
 * 算术运算符
 */

fun demo(a:Int, b:Int){
    println(a + b) // 加法
    println(a - b) // 减法
    println(a * b) // 乘法
    println(a / b) // 除法（整数除法会向下取整）
    println(a % b) // 取余
}

demo(10,4)

/**
 * 自增自减
 *
 * ++a  先加再用
 * a++  先用再加
 */

fun demoInc(){

    var a = 5

    println(++a) // 6

    println(a++) // 6

    println(a)   // 7
}

demoInc()