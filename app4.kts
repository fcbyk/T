/**
 * 逻辑运算符
 *
 * && 短路与
 * || 短路或
 * !  逻辑非
 */

fun demoLogic(a:Boolean, b:Boolean){

    println(a && b) // 两个都 true 才 true

    println(a || b) // 有一个 true 就 true

    println(!a) // 取反
}

demoLogic(true,false)