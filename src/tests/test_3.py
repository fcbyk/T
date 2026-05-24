"""
pytest fixture 示例

fixture 用来提供测试数据或测试环境。
测试函数只需要声明参数，pytest 会自动注入。
"""

import pytest


@pytest.fixture
def user():
    """
    定义一个 fixture

    返回一个用户对象
    """
    return {
        "name": "Tom",
        "age": 18
    }


def test_user_name(user):
    """
    pytest 会自动调用 fixture user
    并把返回值传入 test_user_name
    """
    assert user["name"] == "Tom"


def test_user_age(user):
    """
    同一个 fixture 可以被多个测试函数使用
    """
    assert user["age"] == 18

class Calculator:

    def add(self, a, b):
        return a + b


@pytest.fixture
def calc():
    """
    创建 Calculator 实例
    """
    return Calculator()


def test_add_1(calc):
    assert calc.add(1, 2) == 3


def test_add_2(calc):
    assert calc.add(5, 6) == 11