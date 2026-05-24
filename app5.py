"""
带参数的装饰器（语法糖）
"""

def log(level):             # 第一层：接收装饰器参数
    def decorator(func):    # 第二层：接收被装饰的函数

        def wrapper(*args, **kwargs):   # 第三层：真正的包装函数
            print(f"[{level}] running {func.__name__}")
            return func(*args, **kwargs)

        return wrapper

    return decorator

@log("INFO")    # 1. 先调用 log("INFO")，返回 decorator 函数
def hello():    # 2. 再用 @decorator 装饰 hello
    """
    等价于 hello = log("INFO")(hello)
    """
    pass

hello()


"""
❌ 错误写法
"""

def log(level, func):  # func 放在外层
    def wrapper(*args, **kwargs):
        print(f"[{level}] running {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

# 这样用不了 @ 语法糖！
@log("INFO")  # 会报错，因为 log 需要两个参数
def hello():
    pass

# 只能这样用：
hello = log("INFO", hello)  # 不优雅