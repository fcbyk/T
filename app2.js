/**
优先级问题
| 的优先级非常低，比普通字符、量词（*+?）都低
 */

const print = (...args) => args.forEach(arg => console.log(arg))


const text = `
cat
cet
cctv
`

print(
    // 用括号 () 限定范围
    // 括号可以把分支包起来，表示「这一整块是一个选项」
    text.match(/c(at)|(et)/g),
    text.match(/c(a|e|c)t/g),    
)
