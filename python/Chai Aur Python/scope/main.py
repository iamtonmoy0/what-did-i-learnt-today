def hello():
    print("hello world")
    
def function():
    # this is global
    global x
    x=12


# closure
def closure(num):
    def actual(x):
        return x ** num
    return actual