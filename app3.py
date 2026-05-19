'''
贪婪 vs 非贪婪
默认量词都是贪婪匹配：尽可能多拿在
量词后面加 ? 变成非贪婪（懒惰）：尽可能少拿
'''

import re


# 示例1: HTML标签匹配
text = """
<div>内容</div>
"""

reg = re.compile

print(
    reg(r"<.*>").search(text).group(),      # 贪婪
    reg(r"<.*?>").search(text).group(),     # 非贪婪
    sep="\n"
)



# 示例2: 数字匹配
text2 = "abc123def456ghi789"

print(
    reg(r"\d+").search(text2).group(),       # 匹配第一个连续数字 (默认贪婪)
    reg(r"\d+?").search(text2).group(),      # 只匹配一个数字（非贪婪）
    sep="\n"
)



# 示例3: 引号内内容匹配
text3 = '"Hello" "World" "Python"'

print(
    reg(r'".*"').search(text3).group(),      # 匹配整个字符串
    reg(r'".*?"').search(text3).group(),     # 只匹配第一个引号内容
    sep="\n"
)



# 示例4: 使用 findall 查看所有匹配
text4 = "<p>第一段</p><p>第二段</p><p>第三段</p>"

print(
    reg(r"<p>.*</p>").findall(text4),        # 整个字符串作为一个匹配
    reg(r"<p>.*?</p>").findall(text4),       # 三个独立的匹配
    sep="\n"
)



# 示例5: {m,n} 量词的贪婪与非贪婪
text5 = "aaaaab"

print(
    reg(r"a{2,4}").search(text5).group(),   # 匹配4个a
    reg(r"a{2,4}?").search(text5).group(), # 匹配2个a
    sep="\n"
)
