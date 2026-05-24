"""
pytest 参数化测试（parametrize）

作用：
让一个测试函数可以使用多组数据运行。

如果不用 parametrize，你可能要写很多 test_xxx 函数，
代码会变得非常重复。

使用 parametrize 后：
pytest 会自动把一组测试数据变成一条测试用例。
"""

import pytest
from ..core.main import add
    
# ----------------------------
# 不使用 parametrize 的写法
# ----------------------------

def test_add_1():
    assert add(1, 2) == 3


def test_add_2():
    assert add(2, 3) == 5


def test_add_3():
    assert add(10, 20) == 30


# ----------------------------
# 使用 parametrize 的写法
# ----------------------------

@pytest.mark.parametrize(
    "a,b,expected",  # 测试函数参数
    [
        (1, 2, 3),
        (2, 3, 5),
        (10, 20, 30),
    ]
)
def test_add_param(a, b, expected):
    """
    pytest 会自动执行三次：

    test_add_param(1,2,3)
    test_add_param(2,3,5)
    test_add_param(10,20,30)
    """
    assert add(a, b) == expected



"""
pytest parametrize 间接参数（indirect）

知识点：
1. fixture 可以读取 request.param 来构造不同的测试资源
2. @pytest.mark.parametrize(..., indirect=["fixture_name"]) 将参数传给 fixture
"""

@pytest.fixture
def db(request):
    """
    根据不同参数构造不同的“连接”
    这里只是字符串示例，真实项目可在此初始化连接
    """
    kind = request.param
    return f"db://{kind}"


@pytest.mark.parametrize("db", ["memory", "disk"], indirect=["db"])
def test_db_indirect(db):
    """
    两次执行：
      1) db == 'db://memory'
      2) db == 'db://disk'
    """
    assert db.startswith("db://")
