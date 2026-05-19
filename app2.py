'''
范围匹配（字符类的简化版）
语法：[起始-结束]
作用：匹配连续区间内的任意一个字符，不用一个个罗列
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

# 字符范围：使用连字符 - 表示范围
print(
    reg(r"[a-z]+").findall(text),     # 匹配小写字母
    reg(r"[A-Z]+").findall(text),     # 匹配大写字母
    reg(r"[0-9]+").findall(text),     # 匹配数字
    sep="\n"
)


# 组合范围：多个范围可以组合
print(
    reg(r"[a-zA-Z]+").findall(text),  # 匹配所有字母（大小写）
    reg(r"[a-z0-9]+").findall(text),  # 匹配小写字母和数字
    sep="\n"
)
