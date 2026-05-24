import pytest

def demo(a, b):
    return (
        a and b, # 与运算
        a or b,  # 或运算
        not a    # 非运算
    )  


def test():
    """
    Python逻辑运算符特性
    and / or 返回的是 '参与运算的值'
    not 返回布尔值

    and: 遇假返回，否则返回最后一个值
    or: 遇真返回，否则返回最后一个值
    """

    # 布尔类型
    assert demo(True, False) == (False, True, False)
    
    # 非布尔类型（数字）
    assert demo(1, 0) == (0, 1, False)
    assert demo(100, 200) == (200, 100, False)

    # 字符串
    assert demo("hello", "") == ("", "hello", False)


def test_short_circuit():
    """
    短路机制（Short-Circuit）
    Python 逻辑运算是短路的
    当结果已经确定时，不会执行后面的表达式
    """
    def boom():
        raise RuntimeError("should not be called")

    # and 短路
    assert (False and boom()) is False  # 不会调用 boom()

    # or 短路
    assert (True or boom()) is True     # 不会调用 boom()

    # 短路机制
    assert (100 and 200 and 300 and 0 and 400) == 0
    assert (False or None or 300 or 0 or 400) == 300






