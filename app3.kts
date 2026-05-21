/**
 * for 循环
 * Kotlin 可以迭代数组、集合，也可以用数字范围。
 */

val list = listOf("a", "b", "c")

// 遍历集合
for (item in list) {
    print(item)
    print(" ")
}

println()

// 遍历数字范围
for (i in 1..5) {  // 1 到 5
    print(i)
    print(" ")
}

println()

// 步长
for (i in 10 downTo 1 step 2) {  // 从 10 到 1，步长 2
    print(i)
    print(" ")
}