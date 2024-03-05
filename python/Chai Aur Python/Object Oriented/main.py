# class Card:
#     brand=None
#     model=None 

class Card:
    def __init__(self,brand,model):
        self.brand=brand
        self.model=model

my_car=Card("toyota","corrola")
print(my_car.brand)
print(my_car.model)