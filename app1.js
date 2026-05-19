/**
分组
分组就是用小括号 () 把一段正则表达式包起来，当成一个整体单元使用
把多个字符当成一个整体，给它们加量词（* + ? {n}）
 */

const print = (...args) => args.forEach(arg => console.log(arg))


const text = `
cat
catcat
catcatcat
`

print(
    text.match(/(cat)+/g),           // 匹配1次或多次cat
    text.match(/(cat){2}/g),         // 精确匹配2次cat
    text.match(/(cat){2,3}/g),       // 匹配2-3次cat
)
