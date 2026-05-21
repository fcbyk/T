/**
 * 数据类（data class）
 * 用于简化模型类的写法，并方便比较、复制和解构
 */

/**
 * 数据类定义
 * 使用 data 修饰符声明
 * 主构造函数至少需要一个参数
 * 自动生成：toString(), equals(), hashCode(), copy(), 以及 componentN() 方法（支持解构）
 */
data class User(val name: String, val age: Int)

var main = fun() {
    val user1 = User("Alice", 20)
    val user2 = User("Bob", 25)

    println(user1)  // 输出: User(name=Alice, age=20)

    // 相等比较
    val user3 = User("Alice", 20)
    println(user1 == user3) // true，因为数据类自动实现 equals()

    // 复制对象
    val user4 = user1.copy(age = 21)
    println(user4)  // User(name=Alice, age=21)
}()

/**
 * 解构声明
 * 数据类支持解构，可以直接把属性拆出来
 */
main = fun(){
    val user1 = User("Alice", 20)
    val (name, age) = user1
    println("Name: $name, Age: $age")  // 输出: Name: Alice, Age: 20
}()

