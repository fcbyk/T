"""
保持原函数信息（重要）
在使用装饰器时，原函数的元信息（如函数名、文档字符串、参数列表等）会丢失。
为了避免这个问题，需要使用 functools 模块中的 wraps 装饰器。
"""

import functools

def decorator(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print("before")
        result = func(*args, **kwargs)
        print("after")
        return result
    return wrapper

@decorator
def add(a, b):
    """
    加法函数
    """
    return a + b


print(add.__name__)
print(add.__doc__)
