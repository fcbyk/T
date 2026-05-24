import pytest

def test():
    """
    成员运算符：in / not in
    用于判断元素是否存在于容器（字符串、列表、集合、字典等）中
    注意：在字典上，in 判断的是“键”的成员关系
    """
    s = "hello"
    lst = [1, 2, 3]
    st = {"A", "B"}
    d = {"a": 1, "b": 2}

    assert ("h" in s) == True         # 字符串包含
    assert ("e" not in s) == False    # 字符串不包含
    assert (3 in lst) == True         # 列表成员
    assert (4 not in lst) == True     # 列表不包含成员
    assert ("a" in d) == True         # 字典只判断键
    assert (2 in d.values()) == True  # 判断值需用 values()
    assert ("A" in st) == True        # 集合成员
    assert ("C" not in st) == True    # 集合不包含成员


