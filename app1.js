/**
分支选择
| （竖线）是正则里的 「或匹配」符号
作用：满足左边 或者 右边 任意一个规则，都算匹配成功
 */

const print = (...args) => args.forEach(arg => console.log(arg))


const text = `
catdog
213das
czxc
234
`

print(
    /**
     * | 的优先级非常低，
     * 作用范围是它左右两边的整个子表达式，而不仅仅是紧邻的单个字符
     */
    text.match(/cat|dog/g),     //匹配 cat 或 dog
    text.match(/cat|dog|bird|21/g),  // 可以无限叠加多个分支

    // 匹配顺序：从左到右，找到即停止
    text.match(/1|2|3|4/)
)
