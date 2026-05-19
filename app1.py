import re

text = """
ac
abc
abbc
abbbc
abbbbc
bc
bbc
"""

reg = re.compile

# 基础量词
print(
    reg(r"ab?c").findall(text),     # ? 0 次或 1 次
    reg(r"ab+c").findall(text),     # + 至少 1 次
    reg(r"ab*c").findall(text),     # * 任意次 (0 次及以上)
    sep="\n"
)

# 区间量词
# 上面的等价写法
print(
    reg(r"ab{0,1}c").findall(text),
    reg(r"ab{1,}c").findall(text),
    reg(r"ab{0,}c").findall(text),
    sep="\n"
)

# {,n} 0 到 n 次 
# 在绝大多数编程语言里, 不是标准写法，不推荐用
# 推荐使用 {0, n} 代替
print(
    reg(r"ab{,2}c").findall(text),
    reg(r"ab{0,2}c").findall(text),
    sep="\n"
)