"""
conftest.py

用于定义共享 fixture
pytest 会自动加载这个文件
"""

import pytest


@pytest.fixture
def user():
    """
    提供一个用户对象
    所有测试文件都可以使用
    """
    return {
        "name": "小明",
        "age": 21
    }


@pytest.fixture(scope="session")
def app_config():
    """
    全局配置
    整个测试运行期间只创建一次
    """
    return {
        "env": "test",
        "debug": True
    }