# list starts here
hello = ['john','romeo','alpha']

print(hello[0])  # Output: john
print(hello[-1])  # Output: alpha
print(hello[1:3])  # Output: ['romeo', 'alpha']
hello[1:3] = ['jane', 'doe']  # Replaces 'romeo' and 'alpha' with 'jane' and 'doe'
print(hello)  # Output: ['john', 'jane', 'doe']


tea = ['green', 'black', 'oolong']
tea[1:1] = ['white', 'herbal']  # Inserts 'white' and 'herbal' at index 1
print(tea)
tea = []
print(tea)


# loop starts here
person = ['john', 'doe', 'jane']
for name in person:
    print(name)
# if we want to print the value in same line with comma or minus
for name in person:
    print(name,end='-')