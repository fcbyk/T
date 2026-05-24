import pytest

def test():
    """
    条件表达式（俗称三元运算符）
    x if condition else y
    根据条件在两个值中做选择
    """
    assert ("yes" if True else "no") == "yes"
    assert ("yes" if False else "no") == "no"
    
    # 条件本身也可以是复杂表达式
    x, y = 10, 20
    assert (x+1 if x<y else y+1) == 11

