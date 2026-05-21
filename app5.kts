/**
 * 区间运算符
 *
 * ..       创建闭区间
 * until    不包含结尾
 * downTo   递减区间
 * step     步长
 */

fun demoRange(){

    for(i in 1..5){   // 1 2 3 4 5
        print("$i ")
    }

    println()

    for(i in 1 until 5){  // 1 2 3 4
        print("$i ")
    }

    println()

    for(i in 5 downTo 1){ // 5 4 3 2 1
        print("$i ")
    }

    println()

    for(i in 1..10 step 2){ // 1 3 5 7 9
        print("$i ")
    }

}

demoRange()