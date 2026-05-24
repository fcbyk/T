import pytest

def test():
    """
    海象运算符（赋值表达式） := 
    在表达式中为变量赋值并返回该值，可减少重复计算
    约束：目标必须是“变量名”，不能是属性或下标（如 obj.x、lst[i]）
    常用场景：
    - if / while 条件中缓存计算结果
    - 推导式中过滤同时复用中间值
    """
    s = "hello world"
    # 在 if 条件中缓存 len(s)
    assert (n := len(s)) == 11
    assert n > 5

