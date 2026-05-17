'''
元字符
在正则表达式中具有特殊语法含义的符号
不再代表自己本身的字面意思，是正则表达式的「命令 / 语法」
'''

import re

def reg(pattern):
    return re.compile(pattern)

print(
    # 匹配任意单个字符
    reg(".").search("Hello World").group(),

    # 转义, 把「元字符」变普通字符
    # 让.变普通字符
    reg(r"\.").search("Hello World"),
    reg(r"\.").search("Hello."),

    # 转义，把「普通字母」变特殊元字符
    # d(普通) → \d(元字符 = 数字)
    reg(r"\d").search("Hello World"),
    reg(r"\d").search("Hello 2026"),
    sep="\n"
)
