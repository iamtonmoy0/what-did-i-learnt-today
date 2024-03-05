class Car:
    def  __init__(self, make, model):
        self.make = make
        self.model = model
    def get_brand(self):  # noqa: E999
    	return self.model + "!" 
class ElectricCar(Car):
    def __init__(self, make, model, range):
        super().__init__(make, model)
        self.range = range

my_car=ElectricCar("hello","tesla model s","2000 mile")
print(my_car.make)        
print(my_car.model)        
print(my_car.range)        