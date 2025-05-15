# sting section
x = "hello world"
y = x[0:]
# print(y)

number = '123456789'
print(number[:])

# this will print the whole string
print(number[:7])
# this will print the first 7 characters
print(number[0:7])
# this will print the last 7 characters
print(number[-7:])
# this will print the first 7 characters
print(number[0:7:2])
# this will print the characters from 0 to 7 with a step of 2 and hop characters

# change string upper case and lower case
hello = "hello world"
print(hello.upper())
print(hello.lower())
# remove extra spaces
hi = "   hello world   "
print(hi.strip())
# replace string
tea = "lemon tea"
print(tea.replace("lemon", "green"))
# to find the index of a string
print(tea.find("tea"))
# check count
print(tea.count(tea))