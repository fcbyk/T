"""
通用装饰器（*args **kwargs）
"""

def decorator(func):
    def wrapper(*args, **kwargs):
        print("before")
        result = func(*args, **kwargs)
        print("after")
        result += 100
        return result
    return wrapper

@decorator
def add(a, b):
    return a + b

print(add(a=10, b=20))


print(add.__name__)
