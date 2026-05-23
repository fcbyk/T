# demo38

<a href="https://www.oracle.com/cn/java/" style="margin-right: 5px;">官网</a>
<a href="https://pdai.tech/" style="margin-right: 5px;">全栈知识体系</a>

Java是一门面向对象的编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程。 

Java具有简单性、面向对象、分布式、健壮性、安全性、平台独立与可移植性、多线程、动态性等特点。 Java可以编写桌面应用程序、Web应用程序、分布式系统和嵌入式系统应用程序等。

## 三大平台
### JavaSE
是其他两个版本的基础。
### JavaME
Java语言的小型版，用于嵌入式消费类电子设备或者小型移动设备的开发。<br/>
其中最为主要的还是小型移动设备的开发（手机）。渐渐的没落了，已经被安卓和IOS给替代了。<br/>
但是，安卓也是可以用Java来开发的。<br/>
### JavaEE
用于Web方向的网站开发。（主要从事后台服务器的开发）

## 跨平台的原理
操作系统本身其实是不认识Java语言的，但是针对于不同的操作系统，Java提供了不同的虚拟机

## JRE和JDK
JVM（Java Virtual Machine）：Java虚拟机
JRE（Java Runtime Environment）：Java运行环境，包含了JVM和Java的核心类库（Java API）
JDK（Java Development Kit）：Java开发工具，包含了JRE和开发工具

## 运行

### 直接运行单个 .java 文件

- 从 Java 11 起，你可以不编译，直接运行源码文件
```shell
java Hello.java
```

- 在 Java 8 及更早版本，必须分两步
```shell
javac Hello.java    # 编译生成字节码文件，Hello.class
java Hello
```
