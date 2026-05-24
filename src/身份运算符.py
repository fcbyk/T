import pytest

def test():
    """
    身份运算符：is / is not
    判断“对象身份”（同一内存对象），而不是值相等
    推荐用于与 None 比较：x is None / x is not None
    """
    x = [1, 2]
    y = x          # 同一对象
    z = [1, 2]     # 值相等但不是同一对象

    none_val = None
    not_none = 0

    assert (
        x is y,            # 同一对象 True
        x is z,            # 不是同一对象 False
        x == z,            # 值相等 True
        x is not z,        # 身份不相同 True
        none_val is None,  # 与 None 比较
        not_none is not None,
    ) == (
        True, False, True, True, True, True
    )
