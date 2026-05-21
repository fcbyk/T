/**
 * 标签跳转（Label）
 * 在 Kotlin 中，可以给某个表达式或循环 加一个标签（label）
 * 标签本质是一个 标识符 + @，用于在 break、continue、return 时 明确跳转到哪一层结构
 */

// 标签 + break
fun demo1(){
    outer@ for (i in 1..3) {   // outer 是标签
        for (j in 1..3) {
            if (i * j == 4) {
                break@outer    // 跳出 outer 标记的循环
            }
            println("i=$i j=$j")
        }
    }
}


// 标签 + continue
fun demo2(){
    outer@ for (i in 1..3) {
        for (j in 1..3) {

            if (j == 2) {
                continue@outer  // 直接进入 i 的下一轮
            }

            println("i=$i j=$j")
        }
    }
}


/**
 * 带标签的返回（labeled return）
 * return → 默认 退出当前函数
 * return@label → 只退出指定的 lambda
 */
fun demo3a(){
    val list = listOf(1, 2, 3, 4)

    list.forEach {
        if (it == 3) {
            return
        }
        println(it)
    }

    println("结束")
}


fun demo3b(){
    val list = listOf(1, 2, 3, 4)

    list.forEach {
        if (it == 3) {
            return@forEach
        }

        println(it)
    }

    println("结束")
}

/**
 * 不仅可以用函数名，也可以自己定义 label
 */
fun demo3c() {

    val list = listOf(1, 2, 3, 4)

    list.forEach myLabel@{

        if (it == 3) {
            return@myLabel
        }

        println(it)
    }

    println("结束")
}

demo3a()