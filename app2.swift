/**
 函数参数
 */

// 外部参数名（调用时用），内部参数名（函数内用）
func greet(to name: String) {
    print("你好，\(name)")
}
greet(to: "小明") // 调用必须写 to:

    
// 默认参数
func printInfo(name: String, age: Int = 18) {
    print("\(name) \(age)岁")
}
printInfo(name: "小红") // 省略 age，默认 18

    
// 可变参数
func sum(numbers: Int...) -> Int {
    return numbers.reduce(0, +)
}
print(sum(numbers: 1,2,3,4))
    
    
// inout = 引用传递 = 函数可以修改外部变量
func swap(a: inout Int, b: inout Int) {
    let temp = a
    a = b
    b = temp
}
var x = 1, y = 2
swap(a: &x, b: &y)  // 必须加 &
    
    
// 无标签参数：参数前加 _，调用时省略参数名
func add(_ a: Int, _ b: Int) -> Int { a+b }
print(add(10, 20))  // 不用写 a: b:


