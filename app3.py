'''
字符类里的「排除匹配」
语法：[^...] 方括号内开头加 ^
作用：匹配「除了括号里的字符」以外的任意一个字符
'''

import re

reg = re.compile

text = """
apple
banana
cherry
date
elderberry
fig
grape
123abc
456def
789ghi
ABC
XYZ
test_123
hello!world
"""

# 否定字符类：^ 放在开头表示"除了这些字符"
print(
    reg(r"[^aeiou]+").findall(text),  # 匹配非元音字母的组合
    reg(r"[^0-9]+").findall(text),    # 匹配非数字的组合
    sep="\n"
)