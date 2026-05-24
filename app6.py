"""
类装饰器（装饰器也可以是类）
适合：需要状态、复杂逻辑、可扩展设计
"""

class Timer:

    def __init__(self, func):
        self.func = func

    def __call__(self, *args, **kwargs):
        import time
        start = time.time()
        result = self.func(*args, **kwargs)
        print("time:", time.time() - start)
        return result

@Timer
def work():
    """
    等价于 work = Timer(work)
    """
    import time
    time.sleep(2)

work()

# 多方法结构
class Timer:

    def __init__(self, func):
        self.func = func

    def before(self):
        print("start")

    def after(self):
        print("end")

    def __call__(self, *args, **kwargs):
        self.before()
        r = self.func(*args, **kwargs)
        self.after()
        return r