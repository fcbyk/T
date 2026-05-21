# demo14

> [Kotlin Playground](https://play.kotlinlang.org/) 在线练习

## 函数声明

- **基本语法**：`fun 函数名(参数: 类型): 返回类型 { ... }`
- **单行简写**：`fun multiply(a: Int, b: Int) = a * b`
- **无返回值**：返回类型为 `Unit` 或省略

## 默认参数和命名参数

- **默认参数**：`fun greet(name: String = "World")`
- **命名参数**：`greet(name = "小明")`

## 可变数量参数

- **vararg 修饰符**：`fun sumAll(vararg numbers: Int)`
- **接收不定数量的同一类型参数**

## 高阶函数

- **函数作为参数**：`fun operate(a: Int, b: Int, op: (Int, Int) -> Int)`
- **函数作为返回值**：`fun getMultiplier(factor: Int): (Int) -> Int`
- **函数引用**：使用 `::` 获取函数引用，如 `::add`

## Lambda 表达式

- **基本语法**：`{ 参数 -> 表达式 }`
- **隐式返回**：最后一行自动作为返回值
- **尾随 Lambda**：最后一个参数是 Lambda 时可移到括号外
- **唯一参数省略括号**：`execute { println("Hello") }`
- **隐式参数 it**：单参数时使用 `it` 引用

## 匿名函数

- **定义方式**：`val add = fun(a: Int, b: Int): Int { return a + b }`
- **显式 return**：需要明确的 return 语句
- **立即执行**：`fun(x: Int, y: Int): Int { return x * y }(3, 4)`

## 函数引用

- **:: 操作符**：将命名函数作为值传递
- **示例**：`val predicate = ::isEven`