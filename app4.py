'''
预定义字符类（简写版字符类）
预定义字符类，就是把常用的 [字符范围] 提前起好简写名字
不用每次都写一长串，写起来更短、更清晰

\d 数字
\D 非数字
\w 字母数字下划线
\W 非字母数字下划线
\s 空白
\S 非空白
'''

import re

text = """
用户名: zhang_san123
密码: abc@456!
邮箱: test@example.com
电话: 138-0013-8000
地址: 北京市朝阳区 建国路100号
时间: 2024-01-15 14:30:00
价格: ¥199.99
"""

reg = re.compile


# \d 匹配数字，等价于 [0-9]
print("=== \\d 数字 ===")
print(
    reg(r"\d+").findall(text),          # 提取所有数字序列
    reg(r"\d{4}-\d{2}-\d{2}").findall(text),  # 匹配日期格式
    sep="\n"
)


# \D 匹配非数字，等价于 [^0-9]
print("\n=== \\D 非数字 ===")
print(
    reg(r"\D+").findall(text),          # 提取所有非数字序列
    sep="\n"
)


# \w 匹配字母、数字、下划线，等价于 [a-zA-Z0-9_]
print("\n=== \\w 字母数字下划线 ===")
print(
    reg(r"\w+").findall(text),          # 提取所有单词字符
    reg(r"\w+@\w+\.\w+").findall(text), # 简单匹配邮箱
    sep="\n"
)


# \W 匹配非字母数字下划线，等价于 [^a-zA-Z0-9_]
print("\n=== \\W 非字母数字下划线 ===")
print(
    reg(r"\W+").findall(text),          # 提取所有特殊字符和空格
    sep="\n"
)


# \s 匹配空白字符（空格、制表符、换行符等）
print("\n=== \\s 空白字符 ===")
print(
    reg(r"\s+").findall(text),          # 提取所有空白序列
    reg(r"\w+\s+\w+").findall(text),    # 匹配两个单词之间的空格
    sep="\n"
)


# \S 匹配非空白字符
print("\n=== \\S 非空白字符 ===")
print(
    reg(r"\S+").findall(text),          # 提取所有非空白序列（类似 split）
    sep="\n"
)


# 组合使用：实际应用场景
print("\n=== 组合使用 ===")
print(
    reg(r"\d{3}-\d{4}-\d{4}").findall(text),   # 匹配电话号码
    reg(r"\w+@\w+\.\w+").findall(text),         # 匹配邮箱地址
    reg(r"\d{2}:\d{2}:\d{2}").findall(text),    # 匹配时间格式
    reg(r"[\u4e00-\u9fa5]+").findall(text),     # 匹配中文字符
    sep="\n"
)


# 对比：预定义字符类 vs 字符范围写法
print("\n=== 等价写法对比 ===")
test_text = "abc123_DEF"
print(
    "预定义:", reg(r"\w+").findall(test_text),
    "字符范围:", reg(r"[a-zA-Z0-9_]+").findall(test_text),
    sep="\n"
)