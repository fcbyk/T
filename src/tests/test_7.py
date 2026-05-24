"""
pytest 输出与日志捕获

知识点：
1. capsys 捕获 stdout/stderr 文本输出
2. caplog 捕获 logging 日志（可控制级别与过滤器）
"""

import sys
import logging


def produce_output():
    print("hello stdout")
    print("oops stderr", file=sys.stderr)


def test_capture_stdout_stderr(capsys):
    """
    capsys.readouterr() 返回一个有 .out / .err 的对象
    读取后缓冲区会被清空
    """
    produce_output()
    captured = capsys.readouterr()

    assert "hello stdout" in captured.out
    assert "oops stderr" in captured.err


def test_caplog_basic(caplog):
    """
    caplog.record_tuples 或 caplog.text 检查日志
    """
    logger = logging.getLogger("demo")

    # 将捕获级别设为 INFO
    with caplog.at_level(logging.INFO, logger="demo"):
        logger.debug("not visible")
        logger.info("visible info")
        logger.warning("visible warn")

    # 方式一：直接比对文本
    assert "visible info" in caplog.text
    assert "visible warn" in caplog.text
    assert "not visible" not in caplog.text

    # 方式二：结构化断言
    expected = [("demo", logging.INFO, "visible info"),
                ("demo", logging.WARNING, "visible warn")]
    assert all(item in caplog.record_tuples for item in expected)
