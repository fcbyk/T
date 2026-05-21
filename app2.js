/**
 * y 修饰符（粘连修饰符，sticky） （JS 特有）
 * 必须从 lastIndex 指定的位置开始匹配，不能往后跳，匹配不到就直接失败
 * 
 * 对比:
 * g：全局搜索，找不到就往后跳继续找
 * y：必须粘在当前位置匹配，不匹配就结束
 */

const print = (...args) => args.forEach(arg => console.log(arg))

let str = 'xxabc'

print(
    // 普通匹配
    /abc/.test(str),    // true

    // g 修饰符
    /abc/g.test(str),    // true

    // y 修饰符
    // 因为 y 要求从下标 0 开始就匹配 abc，但开头是 xx，不匹配，直接失败
    /abc/y.test(str),    // false
)

let reg = /abc/y
reg.lastIndex = 2     // 从下标 2 开始匹配
print(
    reg.test(str)   // true
)



// 连续匹配
str = 'aaaaa'
reg = /a/y

print(
    reg.exec(str), // 匹配下标 0
    reg.lastIndex,  // 1

    reg.exec(str), // 匹配下标 1
    reg.lastIndex,  // 2

    reg.exec(str), // 匹配下标 2
)