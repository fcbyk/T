/* 
开头匹配 (^)
^ 匹配整个字符串最开始的位置
*/

const text = `
abc123
xabc
123abc
abcdef
hello world
`

const emails = `
test@example.com
user@domain.org
admin@test.co.uk
`

const print = (...args) => args.forEach(arg => console.log(arg))


// 使用 ^ 匹配以 abc 开头的行
print(
    text.match(/^abc/gm),       // 匹配以 abc 开头
    text.match(/^abc.*/gm),     // 匹配以 abc 开头的整行内容
    emails.match(/^test@\w+\.\w+/gm)  // 只匹配以 test 开头的邮箱
)

/**
修饰符（Modifiers）

g (global) 全局匹配
含义：查找所有匹配项，而不是找到第一个就停止
不加 g：只返回第一个匹配的结果
加上 g：返回字符串中所有符合条件的结果

m (multiline) 多行匹配
含义：将字符串视为多行
关键影响：它改变了 ^ 和 $ 的行为
不加 m：^ 只匹配整个字符串的开头，$ 只匹配整个字符串的结尾
加上 m：^ 可以匹配每一行的开头，$ 可以匹配每一行的结尾
 */