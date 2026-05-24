"""
assert 断言

assert 是 Python 的内置关键字，用于“断言某个条件必须为 True”。

语法：
    assert 条件
    assert 条件, 错误信息

如果条件为 True：
    程序继续执行

如果条件为 False：
    抛出 AssertionError

在 pytest 中，assert 是最核心的断言方式，
pytest 会自动解析 assert 表达式，并给出非常友好的错误提示。
"""

from ..core.main import add

def test_add_equal():
    """
    最基本断言：判断结果是否相等
    """
    # 判断函数返回值是否等于 3
    assert add(1, 2) == 3


def test_add_not_equal():
    """
    判断结果不等
    """
    # 断言 add(1,2) 不等于 4
    assert add(1, 2) != 4


def test_add_greater():
    """
    判断大小关系
    """
    result = add(3, 5)

    # 判断是否大于
    assert result > 5

    # 判断是否大于等于
    assert result >= 8


def test_type():
    """
    判断返回值类型
    """
    result = add(1, 2)

    # 判断类型是否为 int
    assert isinstance(result, int)


def test_custom_message():
    """
    assert 可以附带错误信息
    当断言失败时会显示该信息
    """
    result = add(1, 2)

    assert result == 3, "add(1,2) 的结果应该是 3"


def test_list_contains():
    """
    断言某个值是否在集合中
    """
    nums = [1, 2, 3, 4]

    assert 3 in nums
    assert 5 not in nums