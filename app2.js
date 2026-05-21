/**
负向先行断言：(?!条件)
作用：匹配一个位置，这个位置后面不能是指定内容
特点：排除特定模式，常用于过滤和验证
 */

const print = (...args) => args.forEach(arg => console.log(arg))


const text1 = `
price: $100
price: $200
price: 300元
total: $50
apple123
banana456
`

/**
 * 基本用法：排除特定后续内容
 */
print(
    text1.match(/\$(?!\d+)/g),  // 匹配后面不跟着数字的 $
    text1.match(/\d+(?!元)/g),  // 匹配后面不跟着"元"的数字
)

const text2 = 

/**
 * 理解「否定」概念：确保后面不是某个模式
 */
print(
    // 匹配后面不是 o 的字符
    `hello`.match(/.(?!o)/g),  

    // 匹配后面不是空格或结尾的单词, 非末尾的单词
    `hello world help hero`.match(/\b\w+\b(?!\s*$)/g), 
    // 结果: ["hello", "world", "help"]
    // 解释: 
    // - "hello" ✓ 后面还有 "world help hero"
    // - "world" ✓ 后面还有 "help hero"  
    // - "help"  ✓ 后面还有 "hero"
    // - "hero"  ✗ 后面是字符串结尾，被排除 
)