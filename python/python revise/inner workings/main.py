# list is mutable

myL = [1,2,3,4,5]

myL2 =  myL
myL[0] = 100

print(myL) # [1, 2, 3, 4, 5]
print(myL2) # [1, 2, 3, 4, 5]