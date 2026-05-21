# demo11

[Kotlin Playground](https://play.kotlinlang.org/) - 在线练习

## 注释

- **单行注释**：`//`
- **多行注释**：`/* ... */`（支持嵌套）
- **文档注释**：`/** ... */`（KDoc，支持 `@param`、`@return`）

## 变量

- **不可变变量** `val`：赋值后不能修改（推荐）
- **可变变量** `var`：可以随时修改

```kotlin
val name = "Alice"    // 不可变
var age = 18          // 可变
age = 20              // ✅
```

## 类型推导

编译器自动推断类型，也可显式声明：

```kotlin
val city = "Tokyo"        // 推断为 String
var score: Int = 99       // 显式声明
```

## 基本数据类型

- **整型**：`Int`、`Long`、`Short`、`Byte`
- **浮点型**：`Double`、`Float`
- **布尔**：`Boolean`
- **字符**：`Char`（单引号）
- **字符串**：`String`（双引号）

**类型转换需显式调用**：
```kotlin
val x: Int = 10
val y: Long = x.toLong()
```

## 常量

- `val`：运行时不可变，可在函数内声明
- `const val`：编译期常量，只能在顶层或 object/class 中

```kotlin
object Config {
    const val PI = 3.14159
}
```

## 空安全

Kotlin 区分可空和非空类型，避免空指针异常。

- **非空类型**：`String`（不能为 null）
- **可空类型**：`String?`（可以为 null）

**安全操作符**：
- `?.` 安全调用：`name?.length`（null 时返回 null）
- `!!` 非空断言：`name!!.length`（null 时抛异常）
- `?:` Elvis 运算符：`name ?: "default"`（null 时使用默认值）

## 类型别名

为类型创建易读别名：

```kotlin
typealias UserId = Int
typealias UserMap = Map<String, List<Int>>

val id: UserId = 1001
```