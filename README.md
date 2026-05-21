# demo15

> [Kotlin Playground](https://play.kotlinlang.org/) 在线练习

## 类与对象

- **基本定义**：`class Person { var name: String = "unknown" }`
- **创建对象**：`val p = Person()`
- **成员属性**：`var`（可变）、`val`（只读）
- **成员方法**：`fun sayHello() { ... }`

## 主构造函数

- **构造参数**：`class Person(var name: String, var age: Int)`
- **自动成为成员变量**：使用 `var`/`val` 修饰的参数
- **init 初始化块**：对象创建时执行

## 伴生对象（companion object）

- **类方法**：替代静态方法，`companion object { fun create() }`
- **调用方式**：`Person.createDefaultPerson()`

## 继承

- **open 关键字**：默认类不可继承，需显式标记 `open class Animal`
- **继承语法**：`class Dog(name: String) : Animal(name)`
- **传递父类参数**：子类必须将参数传给父类构造函数

## 方法重写（override）

- **重写方法**：父类方法需标记 `open`，子类使用 `override`
- **super 调用**：`super.info()` 调用父类方法
- **属性重写**：`override val greeting: String`

## 可见性修饰符

- **public**（默认）：任何地方可访问
- **private**：仅当前类内部访问
- **protected**：子类可访问
- **internal**：同一模块内可见
- **构造函数可见性**：`private constructor` 限制实例化

## 多态

- **父类引用指向子类**：`val p: Person = Student("Alice", 10)`
- **动态绑定**：调用被 override 的方法时执行子类实现

## 接口（interface）

- **接口定义**：`interface Drivable { fun drive() }`
- **默认实现**：接口方法可以有默认实现
- **多实现**：类可以实现多个接口 `class Teacher : Person(), Speaker, Player`
- **接口多态**：`val d: Drivable = Car("Honda")`

## 数据类（data class）

- **自动生成方法**：`toString()`, `equals()`, `hashCode()`, `copy()`, `componentN()`
- **定义**：`data class User(val name: String, val age: Int)`
- **解构声明**：`val (name, age) = user`
- **复制对象**：`user.copy(age = 21)`

## 封装

- **隐藏内部实现**：使用 `private` 修饰属性
- **暴露接口**：通过公开方法访问私有数据
- **自定义 getter/setter**：`field` 是幕后字段存储实际值
- **数据验证**：在 setter 中防止非法值

## 抽象类（abstract class）

- **不能实例化**：用作父类模板
- **抽象成员**：`abstract val name`, `abstract fun sound()`
- **普通成员**：可以有实现的普通方法
- **子类必须实现**：所有抽象属性和方法

## 匿名对象（Object Expression）

- **临时对象**：`object : Greeter() { override fun greet() { ... } }`
- **继承或实现接口**：可以重写方法、添加属性
- **单例对象**：`object AppConfig { val version = "1.0" }`
