"""
修饰符 x (扩展模式/VERBOSE) (Python/Java/PHP)
忽略空格与注释
允许正则里写空格和注释，方便复杂正则阅读
javascript 不支持
"""

import re

# 普通正则匹配
print(bool(re.search(r'abc', 'abc')))  # True

# 使用 re.VERBOSE (或 re.X) 标志
# 在 VERBOSE 模式下，正则中的空格会被忽略（除非转义或放在字符类中）
# 可以添加注释（以 # 开头到行尾）

# 简单示例：空格被忽略
pattern1 = re.compile(r'''
    a b c     # 匹配 "abc"，空格被忽略
''', re.VERBOSE)
print(bool(pattern1.search('abc')))    # True
print(bool(pattern1.search('ab c')))   # False (空格被忽略，实际匹配的是 "abc")

# 如果要匹配空格，需要转义或使用 \s
pattern2 = re.compile(r'''
    a\ b\ c   # 匹配 "a b c"，空格被转义
''', re.VERBOSE)
print(bool(pattern2.search('a b c')))  # True
print(bool(pattern2.search('abc')))    # False


# 更实用的例子：匹配日期格式 YYYY-MM-DD
date_pattern = re.compile(r'''
    \d{4}     # 四位年份
    -         # 连字符
    \d{2}     # 两位月份
    -         # 连字符
    \d{2}     # 两位日期
''', re.VERBOSE)

test_dates = ['2024-01-15', '2024/01/15', '24-01-15', '2024-1-15']
for date in test_dates:
    match = date_pattern.search(date)
    print(f"{date}: {bool(match)}")

