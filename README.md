# demo9

> Kotlin 官网 [https://kotlinlang.org/](https://kotlinlang.org/)

## 手动下载 Kotlin 编译器

> Kotlin Releases [https://github.com/JetBrains/kotlin/releases](https://github.com/JetBrains/kotlin/releases)

### 1️⃣ `kotlin-compiler-2.3.10.zip`

* **用途**：通用 Kotlin 编译器，用于编译 Kotlin 代码到 **JVM 字节码** 或 **JavaScript**（Kotlin/JS）。
* **目标平台**：

  * JVM：生成 `.class` 或 `.jar`
  * Kotlin/JS：生成 JavaScript
* **注意**：不生成原生可执行文件，不能在 Windows、Linux、macOS 上生成独立二进制程序。

### 2️⃣ `kotlin-native-prebuilt-windows-x86_64-2.3.10.zip`

* **用途**：Kotlin/Native 原生编译器，将 Kotlin 编译成 **独立原生二进制程序**。
* **目标平台**：

  * 指定平台（Windows x86_64，另有 Linux/macOS/iOS 对应包）
  * 不依赖 JVM

### ✅ 核心区别

| 项目       | kotlin-compiler    | kotlin-native-prebuilt |
| -------- | ------------------ | ---------------------- |
| 目标       | JVM / JS           | 原生二进制（exe / 静态库）       |
| 是否依赖 JVM | 是                  | 否                      |
| 平台       | 通用                 | 指定平台（如 Windows x86_64） |
| 输出       | .class / .jar / JS | 独立可执行文件 / 静态库          |
| 组成       | 编译器 + stdlib       | 编译器 + 运行时库 + 平台库       |

**总结**：

* **kotlin-compiler** → 用于常规 Kotlin 开发（JVM/JS）
* **kotlin-native-prebuilt** → 用于跨平台原生程序开发，不依赖 JVM

---

## 自动下载 Kotlin 编译器

> 大多数 Kotlin 开发环境（如 IntelliJ IDEA、Android Studio）都内置了 Kotlin 编译器。
> 创建或打开 Kotlin 项目时，IDE 会自动下载并配置编译器。

---

### Maven 项目

* **插件**：`kotlin-maven-plugin` 用于编译 Kotlin 代码
* **配置示例（pom.xml）**：

```xml
<plugin>
    <groupId>org.jetbrains.kotlin</groupId>
    <artifactId>kotlin-maven-plugin</artifactId>
    <version>1.9.23</version>
</plugin>
```

* **构建流程**：

```
Kotlin 源码 (.kt)
        ↓
kotlin-maven-plugin
        ↓
Kotlin Compiler
        ↓
.class (JVM 字节码)
        ↓
JVM 运行
```

---

### Gradle 项目

* **Gradle Kotlin 插件** 自动管理 Kotlin 编译器版本：

```kotlin
plugins {
    kotlin("jvm") version "1.9.23"
}
```

* Gradle 会自动：

  1. 下载指定版本的 Kotlin 编译器（含库和工具）
  2. 配置编译任务（`compileKotlin`）
  3. 编译 Kotlin 代码

* 内部流程：

  * 根据插件版本找到 Maven 仓库
  * 下载依赖到本地 Gradle 缓存

* 常见依赖：

| 依赖                           | 作用     |
| ---------------------------- | ------ |
| `kotlin-stdlib`              | 标准库    |
| `kotlin-reflect`             | 反射（可选） |
| `kotlin-compiler-embeddable` | 编译器核心库 |
| `kotlin-script-runtime`      | 脚本支持   |

* Gradle 默认缓存路径：

  * Linux/macOS: `~/.gradle/caches/modules-2/files-2.1/`
  * Windows: `C:\Users\用户名\.gradle\caches\modules-2\files-2.1\`

## 运行 Kotlin 程序

Kotlin 运行在 Java Virtual Machine

- 查看是否已经有 JDK 环境 和 Kotlin 编译器
```bash
java -version
kotlinc -version
```

- 编译
```bash
kotlinc hello.kt -include-runtime -d hello.jar
```

- 运行生成 `hello.jar`
```bash
java -jar hello.jar
```

## Kotlin 脚本

`.kts` 后缀就是 **Kotlin 脚本（Kotlin Script）**。

### 一、`.kt` 和 `.kts` 的区别

| 后缀     | 用途           | 需要写类吗            | 编译方式                      |
| ------ | ------------ | ---------------- | ------------------------- |
| `.kt`  | 正规 Kotlin 文件 | 不一定（可以顶层函数，也可以类） | 先编译成 JVM 字节码 `.class`，再运行 |
| `.kts` | Kotlin 脚本    | 不需要              | 直接解释执行，像 Python 脚本一样      |

### 二、`.kts` 脚本特点

1. **顶层即可写代码**
   不需要 `fun main()`，直接写：

```kotlin
println("Hello Kotlin Script")
```

运行：

```bash
kotlinc -script hello.kts
```

2. **类似 Python / Bash 脚本**

* `.kt` 更像 Java 程序 → 需要编译
* `.kts` 更像 Python 脚本 → 解释执行
