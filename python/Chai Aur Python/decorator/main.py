import time

def timer(fx):
    def wrapper(*args,**kwargs):
        start = time.time()
        result=fx(*args,**kwargs)
        end = time.time()
        print(f"{fx.__name__} run in {end-start} time")
        return result
    return wrapper


@timer
def example(n):
    time.sleep(n)


example(2)