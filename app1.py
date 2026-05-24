"""
Python 装饰器（Decorator）本质是
在不修改原函数代码的情况下，给函数增加额外功能
"""

def decorator(func):
    def wrapper():
        print("before")
        func()
        print("after")
    return wrapper

@decorator
def hello():
    """
    @decorator 
    等价于
    hello = decorator(hello)
    """
    print("hello world")

hello()
