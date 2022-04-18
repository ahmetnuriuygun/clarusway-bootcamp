# The provided code stub reads two integers from STDIN, and . Add code to print three lines where:
'''
The first line contains the sum of the two numbers.
The second line contains the difference of the two numbers (first - second).
The third line contains the product of the two numbers.
Example a = 3 b = 5 Print the following:
8
-2
15
'''

num1 = int(input("Please enter first number: "))
num2 = int(input("Please enter second number: " ))
print((num1+num2),(num1-num2),(num1*num2), sep = '\n')