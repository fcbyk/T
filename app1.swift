/**
 函数定义语法
 用 func 关键字声明，-> 指向返回值
 函数可以嵌套，有访问修饰符 internal
 
 Swift 中所有函数、属性、类，如果不写访问权限修饰符，默认都是 internal
 同一模块（target）内随便访问，模块外不能访问
 */

// 无参数无返回值
func sayHello() {
    print("Hello Swift")
}
sayHello()

// 有参有返回值
func sum(a: Int, b: Int) -> Int {
    return a + b
}
let result = sum(a: 10, b: 20)
print(result)