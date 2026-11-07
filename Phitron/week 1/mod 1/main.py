
# problem 4
count = 0
for n in [1, 2, 3, 4, 5]:
    if n % 2 != 0:
        count += 1
# print(count)


# problem 5
s = 0
for i in range(1, 5):
    if i %2 ==0:
        s += i
    else:
        s -= i
    
# print(s)

k = 0
while k < 5:
    k += 1
    if k == 3:
        continue
    print(k)