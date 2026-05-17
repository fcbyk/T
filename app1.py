'''
普通字符（纯文本，原样匹配）
在正则表达式中，大多数字符都是普通字符，它们会原样匹配自身
'''

import re

def reg(pattern):
    return re.compile(pattern)

# 同时也可以使用 vscode 的正则表达式搜索
print(
    reg("H").search("Hello World").group(),
    reg("x").search("Hello World"),
    reg(" W").search("Hello World").span(),
    sep="\n"
)


