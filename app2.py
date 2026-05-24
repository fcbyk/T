"""
支持参数的装饰器
"""

def decorator(func):
    def wrapper(a, b):
        print("before")
        result = func(a, b)
        print("after")
        return result
    return wrapper

@decorator
def add(a, b):
    return a + b

print(add(1, 2))