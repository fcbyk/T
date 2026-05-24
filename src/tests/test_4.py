"""
fixture 作用域 scope 示例

scope 用来控制 fixture 的生命周期，也就是：

fixture 多久执行一次

常见 scope：

function  每个测试函数执行一次（默认）
class     每个测试类执行一次
module    每个测试文件执行一次
session   整个 pytest 运行周期执行一次

常见真实场景：
session  启动测试服务器
module   数据库连接
function 临时数据
"""

import pytest


# --------------------------------
# function 作用域（默认）
# --------------------------------

@pytest.fixture(scope="function")
def func_resource():
    """
    function 作用域：

    每个测试函数都会重新创建一次 fixture
    """
    print("\n创建 function 资源")

    yield "FUNC_RESOURCE"

    print("销毁 function 资源")


def test_func_1(func_resource):
    print("运行 test_func_1")
    assert func_resource == "FUNC_RESOURCE"


def test_func_2(func_resource):
    print("运行 test_func_2")
    assert func_resource == "FUNC_RESOURCE"


# --------------------------------
# module 作用域
# --------------------------------

@pytest.fixture(scope="module")
def module_resource():
    """
    module 作用域：

    一个测试文件只创建一次
    """
    print("\n创建 module 资源")

    yield "MODULE_RESOURCE"

    print("销毁 module 资源")


def test_module_1(module_resource):
    print("运行 test_module_1")
    assert module_resource == "MODULE_RESOURCE"


def test_module_2(module_resource):
    print("运行 test_module_2")
    assert module_resource == "MODULE_RESOURCE"


# --------------------------------
# class 作用域
# --------------------------------

@pytest.fixture(scope="class")
def class_resource():
    """
    class 作用域：

    每个测试类只创建一次
    """
    print("\n创建 class 资源")

    yield "CLASS_RESOURCE"

    print("销毁 class 资源")


class TestExample:

    def test_class_1(self, class_resource):
        print("运行 test_class_1")
        assert class_resource == "CLASS_RESOURCE"

    def test_class_2(self, class_resource):
        print("运行 test_class_2")
        assert class_resource == "CLASS_RESOURCE"