# list starts here
hello = ['john','romeo','alpha']

print(hello[0])  # Output: john
print(hello[-1])  # Output: alpha
print(hello[1:3])  # Output: ['romeo', 'alpha']
hello[1:3] = ['jane', 'doe']  # Replaces 'romeo' and 'alpha' with 'jane' and 'doe'
print(hello)  # Output: ['john', 'jane', 'doe']