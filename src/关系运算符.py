import pytest

def test():
    """
    关系运算符
    结果为bool类型
    """
    a = 5
    b = 3
    assert (
        a > b,
        a < b,
        a >= b,
        a <= b,
        a == b,   # 等于
        a != b,   # 不等于
    ) == (
        True, False, True, False, False, True
    )