/**
Swift 里的 闭包
闭包 =  匿名函数 = lambada  (约等关系)
功能：捕获上下文常量/变量 + 一等公民（可作为参数、返回值）
*/


/**
匿名函数特点
没有 func 关键字
没有函数名
用 {} 包裹
参数和实现之间用 in 分隔
语法：{  (参数列表)  ->   返回值类型    in    函数体}
*/
var add = { (a: Int, b: Int) -> Int in
    return a + b
}
print(add(3, 5))

  
// 无参数无返回值可以省略 括号 和 in
let hello = {
    print("hello")
    print("world")
}
hello()


// 闭包只有一行表达式时，可以省略 return
add = { (a: Int, b: Int) -> Int in a + b }
print(add(5, 5))


// 只有一个参数时，省略括号
let addOne = {
    num -> Int in num + 1
}
print(addOne(100));


// 立即执行的闭包
_ = { print("立即执行函数") }()


/**
闭包作为函数参数
*/
func calculate(a: Int, b: Int, operation: (Int, Int) -> Int) -> Int {
    return operation(a, b)
}


// 传参
print(
    calculate(a: 10, b: 20, operation: { (x, y) -> Int in x + y })
)


/**
尾随闭包（函数最后一个参数是闭包，可写在括号外面）
*/
print(
    calculate(a: 10, b: 5) { x, y in
        x * y
    }
)


/**
简写参数名 $0, $1, $2...（最简洁写法）
*/
print(
    calculate(a: 20, b: 10) { $0 - $1 }
)


/**
闭包可以捕获上下文中的变量/常量（核心特性）
*/
func makeIncrementer(step: Int) -> () -> Int {
    var total = 0
    // 闭包捕获了 total 和 step
    return {
        total += step
        return total
    }
}
let increment = makeIncrementer(step: 2)
print("捕获值：\(increment())") // 2
print("捕获值：\(increment())") // 4
print("捕获值：\(increment())") // 6


/**
逃逸闭包 @escaping（异步/延时执行必须用）
当一个闭包作为参数传给函数，但不在函数内部立刻执行，而是被存起来、延时执行、在异步队列执行，这个闭包就需要标记 @escaping —— 逃逸闭包。
“逃逸” 的意思：闭包逃离了函数的生命周期，函数执行完了，闭包还活着，之后才会调用。

非逃逸闭包（不写 @escaping），闭包在函数内部立即执行
函数结束 → 闭包立刻销毁
安全、编译器自动优化
*/
var completionHandlers: [() -> Void] = []
func someFunctionWithEscaping(completion: @escaping () -> Void) {
    // 存起来，之后调用 → 逃逸
    completionHandlers.append(completion)
}
someFunctionWithEscaping { print("逃逸闭包执行") }
completionHandlers.first?()


/**
自动闭包 @autoclosure（自动把表达式包成闭包）
*/
func printIfTrue(condition: @autoclosure () -> Bool) {
    if condition() { print("自动闭包：条件为真") }
}
// 直接传表达式，不用写 {}
printIfTrue(condition: 3 > 1)


