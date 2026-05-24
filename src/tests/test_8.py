"""
pytest tmp_path 示例

知识点：
1. tmp_path 是 pytest 提供的内置 fixture
2. 每个测试都会得到一个独立的临时目录
3. 返回的是 pathlib.Path 对象
4. pytest 测试结束后会自动删除该目录
"""

def test_create_file(tmp_path):
    """
    tmp_path 是一个 Path 对象
    """

    # 创建文件路径
    file = tmp_path / "hello.txt"

    # 写入文件
    file.write_text("hello pytest")

    # 读取文件
    content = file.read_text()

    # 断言内容
    assert content == "hello pytest"
