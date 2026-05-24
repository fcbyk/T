"""
pytest monkeypatch 示例

知识点：
1. monkeypatch 是 pytest 提供的内置 fixture。
2. 可以在测试期间临时修改：
   - 函数
   - 模块变量
   - 环境变量
3. 测试结束后会自动恢复原值。
"""

import os
import sys
import pytest


def get_api_url():
    """
    从环境变量读取 API 地址
    """
    return os.getenv("API_URL", "http://localhost")


# -------------------------------------------------
# 1 默认行为测试
# -------------------------------------------------

def test_default_api_url():
    """
    如果环境变量不存在
    应该返回默认地址
    """
    assert get_api_url() == "http://localhost"


# -------------------------------------------------
# 2 monkeypatch 修改环境变量
# -------------------------------------------------

def test_api_url_from_env(monkeypatch):
    """
    monkeypatch.setenv 可以临时设置环境变量
    """

    monkeypatch.setenv("API_URL", "https://api.example.com")

    assert get_api_url() == "https://api.example.com"


# -------------------------------------------------
# 3 monkeypatch 修改函数
# -------------------------------------------------

def get_data():
    """
    假设这是一个真实项目里的函数
    实际可能会调用网络请求
    """
    return "real data"


def process_data():
    """
    业务逻辑函数
    """
    data = get_data()
    return f"processed {data}"


def fake_get_data():
    """
    模拟函数（mock）
    """
    return "fake data"


def test_process_data(monkeypatch):
    """
    monkeypatch.setattr 可以替换函数
    """

    # 替换 get_data 函数
    # 推荐写法：传入“模块对象 + 属性名”，避免字符串路径在不同导入方式下解析不一致
    monkeypatch.setattr(sys.modules[__name__], "get_data", fake_get_data)
    # 另一种写法：使用完整字符串路径（此时不再单独传 name 参数）
    # monkeypatch.setattr("demo3.tests.test_7.get_data", fake_get_data)

    result = process_data()

    assert result == "processed fake data"

# -------------------------------------------------
# 4 进阶：删除环境变量 / setitem 补充示例
# -------------------------------------------------

def test_api_url_deleted(monkeypatch):
    """
    删除变量后应回退到默认值
    """
    monkeypatch.setenv("API_URL", "https://temp.example.com")
    monkeypatch.delenv("API_URL", raising=False)
    assert get_api_url() == "http://localhost"


def test_api_url_setitem(monkeypatch):
    """
    直接修改字典对象同样生效
    setitem 适用于任何 mapping，如配置 dict
    """
    monkeypatch.setitem(os.environ, "API_URL", "https://via-setitem.example.com")
    assert get_api_url() == "https://via-setitem.example.com"


def test_process_data_with_context():
    """
    不依赖 fixture 的上下文用法
    with pytest.MonkeyPatch().context() 作为临时作用域
    """
    with pytest.MonkeyPatch().context() as m:
        m.setattr(sys.modules[__name__], "get_data", lambda: "ctx data")
        assert process_data() == "processed ctx data"
