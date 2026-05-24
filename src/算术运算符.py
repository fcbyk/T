import pytest

def demo(a,b):
    return (
        a+b, a-b, a*b, a/b,    # 加减乘除
        a//b,   # 整除
        a**b,   # 幂运算
        a%b,    # 模运算
    )

def test():
    assert demo(10, 3) == (13, 7, 30, pytest.approx(10 / 3), 3, 1000, 1)
    assert demo(17, 2) == (19, 15, 34, pytest.approx(17 / 2), 8, 289, 1)

