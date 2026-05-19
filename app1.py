'''
字符类
语法：[] 方括号
作用：匹配括号内的任意一个字符，只匹配单个字符
'''

import re

text = """
apple
banana
cherry
hello!world
reason
"""

reg = re.compile


# 基础字符类：匹配括号内的任意一个字符
print(
    reg(r"[abc]+").findall(text),     # 匹配 a、b、c 的组合
    reg(r"[aeiou]+").findall(text),   # 匹配元音字母的组合
    sep="\n"
)
