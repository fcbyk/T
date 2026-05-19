import re

text = """
abc
abbc
abbbc
"""

reg = re.compile

# 量词只修饰紧靠它前面那一个单元
# 中文、普通字符、括号、字符集[]都可以被量词修饰
print(
    reg(r"abc+").findall(text),     # 只有c可以重复，ab 固定
    reg(r"(abc)+").findall(text),   # 整个分组abc重复
    reg(r"[ab]+").findall(text),    # 修饰字符集
    sep="\n"
)