import pytest

def test():
    """
    Python 特性
    赋值运算符不返回值，只是修改了变量的值（语法层面就不允许出现在表达式位置）
    """
    n = 10; n += 10 ; assert n == 20
    n = 10; n -= 2 ; assert n == 8
    n = 10; n *= 3 ; assert n == 30
    n = 10; n /= 2 ; assert n == pytest.approx(5.0)
    n = 10; n//=2; assert n == 5
    n = 10; n %= 4 ; assert n == 2
    n = 10; n **= 3 ; assert n == 1000
    n = 10; n &= 0b1010 ; assert n == 10
    n = 10; n |= 0b0011 ; assert n == 11
    n = 10; n ^= 0b0101 ; assert n == 15
    n = 10; n <<= 1 ; assert n == 20
    n = 10; n >>= 1 ; assert n == 5

