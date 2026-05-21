/**
正向后行断言：(?<=条件)
作用：匹配一个位置，这个位置前面必须是指定内容
特点：从右往左看，确保前面有特定模式，但不消耗前面的字符
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
 * 基本用法：提取特定前缀后的内容
 */
print(
    text1.match(/(?<=\$)\d+/g),  // 匹配前面有 $ 的数字（但不包含$）
    text1.match(/(?<=price: )\d+/g),  // 匹配前面是 "price: " 的数字
)

/**
 * 综合练习
 */
print(
    // 匹配 @ 后面的单词字符
    `@john @mary @admin hello @guest`.match(/(?<=@)\w+/g),  
    
    // 提取美元金额
    `¥100 $200 €300 £400 ₹500`.match(/(?<=\$)\d+/g), 
    
    // 提取人民币金额
    `¥100 $200 €300 £400 ₹500`.match(/(?<=¥)\d+/g), 
    
    // 提取欧元金额
    `¥100 $200 €300 £400 ₹500`.match(/(?<=€)\d+/g),
    
    // 一次性提取所有货币后的数字
    `¥100 $200 €300 £400 ₹500`.match(/(?<=[$¥€£₹])\d+/g),

    // 提取 class 属性的值
    `<div class="container">Hello</div>`.match(/(?<=class=")[^"]+/g),
    
    // 提取 id 属性的值
    `<span id="main">World</span>`.match(/(?<=id=")[^"]+/g),
    
    // 提取 data-value 属性的值
    `<p data-value="123">Test</p>`.match(/(?<=data-value=")[^"]+/g),
)









