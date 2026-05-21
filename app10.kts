/**
 * 封装的核心思想
 * 封装就是 隐藏类的内部实现，只暴露必要的接口。
 * Kotlin 用 可见性修饰符 + getter/setter 来实现封装。
 */

class BankAccount(private var balance: Double) {

    // 只读对外暴露余额
    val currentBalance: Double
        get() = balance

    // 对外提供存款方法
    fun deposit(amount: Double) {
        if (amount > 0) balance += amount
    }

    // 对外提供取款方法
    fun withdraw(amount: Double) {
        if (amount > 0 && amount <= balance) balance -= amount
        else println("Insufficient funds")
    }
}

var main = fun() {
    val account = BankAccount(1000.0)
    println(account.currentBalance)  // 1000.0
    account.deposit(500.0)
    println(account.currentBalance)  // 1500.0
    account.withdraw(2000.0)         // 输出: Insufficient funds
}()

/**
 * 自定义 getter/setter
 * field 是 幕后字段，用来存储实际值。
 */
class Person(name: String) {
    var age: Int = 0
        set(value) {
            field = if (value < 0) 0 else value  // 防止负数
        }
        get() {
            println("Getter called")
            return field
        }
}

main = fun() {
    val p = Person("Alice")
    p.age = -5        // 自动修正为 0
    println(p.age)    // 输出 Getter called \n 0
}()