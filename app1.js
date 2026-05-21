/**
 * 修饰符（flags）
 * 正则修饰符（也叫标志 / 模式）是写在正则表达式末尾的标记
 * 用来改变正则的匹配规则，不参与字符匹配本身，是正则里非常实用的工具
 */

const print = (...args) => args.forEach(arg => console.log(arg))

// g、i、m、s、u 是最常用 5 个
print(
    // 修饰符i，忽略大小写匹配
    "abc".match(/A/),
    "abc".match(/A/i),

    // 修饰符g，全局匹配，返回所有匹配结果，而不仅仅是第一个
    "abcabc".match(/a/),
    "abcabc".match(/A/gi),

    // 修饰符m，多行匹配，改变^和$的匹配规则
    "abd\nabc".match(/^abc/),
    "abd\nabc".match(/^abc/m),

    // 默认 . 不能匹配换行符 \n
    // 修饰符s，点号匹配所有字符，包括换行符
    "a\nb".match(/a.b/),
    "a\nb".match(/a.b/s),

    // 修饰符u，Unicode模式，将正则表达式中的Unicode字符进行匹配
    // 处理中文、emoji、特殊符号时必须用，否则可能乱匹配
    "吉a".match(/吉./),
    "吉a".match(/吉./u),
    "😀".match(/😀/u),
    // 没有u标志时，无法正确处理代理对字符
    "😀😃".match(/^..$/),      // 不能匹配完整的emoji
    "😀😃".match(/^..$/u),     // 使用u标志后可以正确匹配
    // 量词在没有u标志时的行为差异
    "😀😀".match(/^.{2}$/),   // 匹配的是代码单元而非完整字符
    "😀😀".match(/^.{2}$/u),  // 正确匹配两个emoji字符
)
