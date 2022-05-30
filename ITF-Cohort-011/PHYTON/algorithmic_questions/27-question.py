#Write a function for Floyd's triangle of n rows in Python, you need to ask from user to enter the number of rows or lines up to which.Sample run of program, with user input 10 as number of rows, is shown in the snapshot given below: 
'''
1
2  3
4  5  6
7  8  9  10
11 12 13 14 15
16 17 18 19 20

'''

n = int(input('Please enter a number'))
num = 1
for i in range(1,n+1) :
    for j in range(1,i+1) :
        print(num, end =" ")
        num = num + 1
    print()