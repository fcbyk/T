/**
反向引用
= 引用之前匹配到的分组内容
= 在同一个正则表达式里，重复使用前面捕获到的分组内容
 */

const print = (...args) => args.forEach(arg => console.log(arg))

const text = `
cat
cat
catcat
catcatcat
catdog
`
const phone = `
13812345678
13812341234
`

print(
    // 捕获组会自动编号：$1、$2、$3...（从左到右数左括号）
    // 可以在后续代码 / 替换中取出这些内容
    text.match(/(cat)\1\1/),

    // 注意引用的是匹配的内容，而不是正则表达式
    // excel 支持引用正则 /(13\d)(\d{4})(?2)/
    phone.match(/(13\d)(\d{4})\2/),

    // 非捕获组 无法引用
    // 有的语言会抛异常
    text.match(/(?:cat)\1/),

    // 引用命名捕获组
    // 语法 \k<name>
    text.match(/(?<c>cat)\k<c>/),
)