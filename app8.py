"""
装饰器工厂
"""

def log(level):      
    def decorator(func):

        def wrapper(*args, **kwargs):
            print(f"[{level}] running {func.__name__}")
            return func(*args, **kwargs)

        return wrapper

    return decorator

# 创建不同级别的日志装饰器
info_logger = log("INFO")      # 返回一个装饰器
warning_logger = log("WARNING") # 返回另一个装饰器
error_logger = log("ERROR")    # 返回第三个装饰器

# 使用这些装饰器
@info_logger
def func1():
    pass

@warning_logger  
def func2():
    pass

func1()
func2()