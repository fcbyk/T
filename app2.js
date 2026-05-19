/**
捕获组 vs 非捕获组 vs 命名捕获组

捕获 = 分组 + 把分组匹配到的内容保存下来
非捕获组 = 分组 + 不把分组匹配到的内容保存下来
命名捕获组 = 分组 + 把分组匹配到的内容保存下来并命名
 */

const print = (...args) => args.forEach(arg => console.log(arg))

const text = `
cat
catcat
catcatcat
catdog
`

print(
    // 捕获组
    // 语法 (pattern)
    // 默认就是捕获组
    text.match(/(cat)(cat)/),
    
    // 非捕获组，无法访问分组内容
    // 语法 (?:pattern)
    text.match(/(?:cat){2}/),
    
    // 命名捕获组
    // 语法 (?<name>pattern)
    text.match(/(?<hello>cat)(?<x>dog)/)
)

/**

text.match() 返回值 =>

1. 不使用全局标志 /g：返回一个数组 
[
    完整匹配项（索引 0）
    捕获组（如果有）
    index：匹配的起始位置
    input：原始字符串
    groups：命名捕获组（如果有）
]

2. 使用全局标志 /g：返回所有匹配项的数组（不包含捕获组信息）
3. 无匹配：返回 null

 */
