"""
多个装饰器
"""

def a(func):
    def wrapper(*args, **kwargs):
        print("a before")
        result = func(*args, **kwargs)
        print("a after")
        return result
    return wrapper

def b(func):
    def wrapper(*args, **kwargs):
        print("b before")
        result = func(*args, **kwargs)
        print("b after")
        return result
    return wrapper

@a
@b
def hello():
    """
    等价于 hello = a(b(hello))
    装饰顺序：从下往上（@b先，@a后）
    执行顺序：从上往下（a 的 wrapper 先进入，b 的 wrapper 后进入）
    """
    print("hello")

hello()
