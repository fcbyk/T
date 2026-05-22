/**
  函数返回值
 */


/**
无返回值函数（Void）
写法1：不写 -> 类型，默认无返回值
写法2：显式写 -> Void，效果一样
*/
func sayHello() { print("你好，Swift 函数！") }
func printMessage() -> Void { print("这是一个没有返回值的函数") }
    
    
// 多返回值：用元组 (Tuple) 实现
func getUserInfo() -> (name: String, age: Int, city: String) {
    return ("小明", 20, "北京")
}
    

// 可选返回值：返回值可能为 nil，用 ? 标记
func findUserName(id: Int) -> String? {
    if id == 100 {
        return "小红"
    } else {
        // 没有找到用户，返回 nil
        return nil
    }
}
let name = findUserName(id: 100)
print("ID=100 的用户名：\(name ?? "未找到")")

    
// 函数作为返回值（高阶函数）
func makeIncrementer() -> (Int) -> Int {
    func addOne(number: Int) -> Int {
        return number + 1
    }
    return addOne
}


// 隐式返回：函数体只有一行代码，可省略 return
func multiply(a: Int, b: Int) -> Int { a * b }


// 忽略返回值：用 _ 接收不使用的返回值
func add(a: Int, b: Int) -> Int {
    print("忽略返回值，IDE没有未使用警告")
    return a+b
}
_ = add(a: 10, b: 20)
