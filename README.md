# demo13

> [Kotlin Playground](https://play.kotlinlang.org/) 在线练习

## if 表达式

- **作为表达式**：`val max = if (a > b) a else b`
- **标准用法**：`if (condition) { ... } else { ... }`

## when 表达式

- **增强版 switch**：支持值、范围、类型匹配
- **多值匹配**：`2, 3 -> println("x 是 2 或 3")`
- **范围匹配**：`in 4..10 -> println("x 在 4 到 10 之间")`
- **作为表达式**：`val result = when (x) { 1 -> "一"; else -> "其他" }`

## for 循环

- **遍历集合**：`for (item in list) { ... }`
- **数字范围**：`for (i in 1..5) { ... }`
- **步长控制**：`for (i in 10 downTo 1 step 2) { ... }`

## while / do..while 循环

- **while**：先判断后执行
- **do..while**：先执行后判断

## 循环控制

- **break**：跳出循环
- **continue**：跳过本次循环，继续下一次

## 标签跳转（Label）

- **标签定义**：`outer@ for (i in 1..3) { ... }`
- **break@label**：跳出指定标签的循环
- **continue@label**：继续指定标签的下一轮循环
- **return@label**：只退出指定的 lambda