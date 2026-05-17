'''
基础元字符（当前仅了解）
. 任意一个字符
* 重复 0 次或更多
+ 重复 1 次或更多
? 重复 0 次或 1 次
^ 开头
$ 结尾
| 或者
\ 转义
() 分组
[] 字符集
{} 次数范围
'''

import re

def reg(pattern):
    return re.compile(pattern)

print(
    # . 匹配任意单个字符（除换行符）
    reg(r".").search("abc").group(),
    reg(r"...").search("Hello").group(),

    # * 重复 0 次或更多次
    reg(r"ab*c").search("ac").group(),
    reg(r"ab*c").search("abc").group(),
    reg(r"ab*c").search("abbbc").group(),

    # + 重复 1 次或更多次
    reg(r"ab+c").search("ac"),
    reg(r"ab+c").search("abc").group(),
    reg(r"ab+c").search("abbbc").group(),

    # ? 重复 0 次或 1 次
    reg(r"ab?c").search("ac").group(),
    reg(r"ab?c").search("abc").group(),
    reg(r"ab?c").search("abbc"),

    # ^ 匹配字符串开头
    reg(r"^Hello").search("Hello World").group(),
    reg(r"^Hello").search("Say Hello"),

    # $ 匹配字符串结尾
    reg(r"World$").search("Hello World").group(),
    reg(r"World$").search("World Peace"),

    # | 或者
    reg(r"cat|dog").search("I have a cat").group(),
    reg(r"cat|dog").search("I have a dog").group(),

    # \ 转义特殊字符
    reg(r"\.").search("file.txt").group(),
    reg(r"\d").search("Year 2026").group(),

    # () 分组
    reg(r"(abc)+").search("abcabc").group(),
    reg(r"(ab|cd)").search("ab123").group(),

    # [] 字符集，匹配其中任意一个字符
    reg(r"[aeiou]").search("hello").group(),
    reg(r"[0-9]").search("abc123").group(),
    reg(r"[a-z]").search("ABCdef").group(),

    # {} 指定重复次数
    reg(r"a{3}").search("aaa").group(),
    reg(r"a{2,4}").search("aaaa").group(),
    reg(r"a{2,}").search("aaaaa").group(),
    sep="\n"
)