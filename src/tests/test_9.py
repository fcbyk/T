"""
pytest.mark 示例 (skip / xfail / 自定义 marks)

知识点：
1. pytest.mark 用于给测试打标签
2. 可以根据标签选择运行测试
3. 常用于区分：
   - 慢测试
   - API测试
   - 数据库测试
1. @pytest.mark.skip 条件跳过
2. @pytest.mark.xfail 预期失败（例如未实现的功能或已知缺陷）
3. 自定义标记需在 pytest.ini 注册，避免 UnknownMark 警告
"""

import sys
import pytest


@pytest.mark.skipif(sys.platform.startswith("java"), reason="示例：在 Jython 上跳过")
def test_skip_example():
    assert 1 + 1 == 2


@pytest.mark.xfail(reason="示例：尚未实现的功能", strict=False)
def test_xfail_example():
    # 这是一个示例性的“失败”断言，期望为 xfail
    assert "a".upper() == "a"  # 实际为 "A"


@pytest.mark.slow
def test_custom_mark_registered():
    """
    自定义标记示例（已在 pytest.ini 中注册）
    """
    assert sum([1, 2, 3]) == 6


@pytest.mark.slow
def test_big_task():
    """
    一个耗时任务
    """
    assert 1 + 1 == 2


@pytest.mark.fast
def test_small_task():
    """
    一个很快的测试
    """
    assert 2 + 2 == 4


# 一个测试可以有多个标签。
@pytest.mark.api
@pytest.mark.slow
def test_api_request():
    """
    模拟 API 测试
    """
    assert True
