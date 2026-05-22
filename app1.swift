/**
 * 运算符(与其他语言相似)
 */


// 算术运算符
 _ = {
    let a = 10
    let b = 20
    print(a + b)
    print(a - b)
    print(a * b)
    print(a / b)
    print(a % b)
 }()


// 赋值运算符示例
_ = {
    var x = 5
    x += 2
    x -= 1
    x *= 3
    x /= 2
    x %= 4
    print(x)
}()


// 比较运算符示例
_ = {
    let a = 10
    let b = 20
    print(a == b)
    print(a != b)
    print(a > b)
    print(a < b)
    print(a >= b)
    print(a <= b)
}()


// 逻辑运算符示例
_ = {
    let t = true
    let f = false
    print(t && f)
    print(t || f)
    print(!t)
}()


// 位运算符示例
_ = {
    let a: UInt8 = 0b1010
    let b: UInt8 = 0b1100
    print(a & b)
    print(a | b)
    print(a ^ b)
    print(~a)
    print(a << 1)
    print(a >> 2)
}()

// 三元条件运算符
_ = {
    let a = 10
    let b = 20
    print(a > b ? a : b)
}()