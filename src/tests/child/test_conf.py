"""
conftest.py 的作用域
pytest 会 向上查找 fixture。

pytest 查找 fixture 的顺序大致是：
1 当前测试函数所在文件
2 当前目录的 conftest.py
3 父目录的 conftest.py
4 pytest 插件中的 fixture
"""

def test_user_name(user):
    """
    直接使用 user fixture
    不需要 import
    """
    assert user["name"] == "小明"

def test_user_age(user):

    assert user["age"] == 21

def test_hello(hello):
    assert hello == "hello pytest"