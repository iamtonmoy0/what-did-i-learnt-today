import copy

a = [1,2,3,4,5]
b = a[:]
a[0] = 100
# print(a)
# print(b)

c = [1,2,3,4,5]
d = copy.deepcopy(c)
print(c)
print(d)