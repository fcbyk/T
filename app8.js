/**
 * void运算符
 * 格式：void(表达式)
 * 什么都不返回，好像是返回undefined
 * 常用于a标签
 * <a href="javascript:void(0)">单击此处什么也不会发生</a>
 */
function textVoid() {
    n = 'str'
    n = void (1 + 1)
    console.log(n) //undefined
    console.log(typeof n) //undefined

    let empty = void (0)
    console.log(empty) //undefined
    console.log(typeof empty) //undefined 
}