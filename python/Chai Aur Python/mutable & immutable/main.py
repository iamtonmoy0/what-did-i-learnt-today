# mutable and immutables in python
a=[12,12,35]
b=a
a[0]=15
print(a,"this is a")
print(b,"this is b")

import copy
h=[1,23,2]
# h2=copy.copy(h)
h2=copy.deepcopy(h)
print(h2)