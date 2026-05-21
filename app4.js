/**
负向后行断言：(?<!条件)
作用：匹配一个位置，这个位置前面不能是指定内容
特点：排除特定前缀，常用于过滤和精确匹配
注意：ES2018+ 才支持，旧浏览器可能不兼容
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
 * 基本用法：排除特定前缀的内容
 */
print(
    text1.match(/(?<!\$)\d+/g), // 匹配前面没有 $ 的数字
    text1.match(/(?<!price: )\d+/g),  // 匹配前面不是 "price: " 的数字
)

const text2 = `cat category catalog dog dogs doggy`

/**
 * 匹配独立的单词
 */
print(
    // 匹配 cat，但不是 categy 或 catalog 中的 cat
    `cat category catalog dog dogs doggy`.match(/(?<![a-z])cat(?![a-z])/),
    
    // 匹配 dog，但不是 dogs 或 doggy 中的 dog
    `cat category catalog dog dogs doggy`.match(/(?<![a-z])dog(?![a-z])/)
)