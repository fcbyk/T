"""
pytest 异常测试（raises）

知识点：
1. pytest.raises() 用于断言某段代码会抛出指定异常。
2. 如果：
   - 没有抛异常
   - 抛出了错误类型的异常
   测试都会失败。
3. 常用于测试：
   - 参数校验
   - 非法输入
   - 业务规则错误
4. 可以捕获异常对象，从而进一步检查异常信息。
"""

import pytest
from ..core.main import divide

def check_age(age):
    """
    一个简单的参数校验函数

    规则：
        age 不能小于 0
    """
    if age < 0:
        raise ValueError("age must >= 0")

    return age


# -------------------------------------------------
# 1 基础异常测试
# -------------------------------------------------

def test_divide_zero():
    """
    基础用法

    with pytest.raises(异常类型):
        可能抛异常的代码
    """

    with pytest.raises(ZeroDivisionError):
        divide(1, 0)


# -------------------------------------------------
# 2 如果没有抛异常，测试会失败
# -------------------------------------------------

def test_divide_normal():
    """
    正常情况不会抛异常
    """

    result = divide(6, 3)

    assert result == 2


# -------------------------------------------------
# 3 捕获异常对象
# -------------------------------------------------

def test_check_age_error():
    """
    pytest.raises 可以捕获异常对象

    写法：
        with pytest.raises(ExceptionType) as exc
    """

    with pytest.raises(ValueError) as exc:
        check_age(-1)

    # exc.value 就是异常对象
    # 可以检查异常信息
    assert "age must" in str(exc.value)


# -------------------------------------------------
# 4 使用 parametrize 批量测试异常
# -------------------------------------------------

@pytest.mark.parametrize(
    "value",
    [-1, -10, -100]
)
def test_check_age_multiple(value):
    """
    参数化测试 + 异常测试

    pytest 会执行三次：
        check_age(-1)
        check_age(-10)
        check_age(-100)

    每次都必须抛 ValueError
    """

    with pytest.raises(ValueError):
        check_age(value)


# -------------------------------------------------
# 5 测试异常不发生
# -------------------------------------------------

def test_check_age_valid():
    """
    测试合法输入
    """

    assert check_age(18) == 18