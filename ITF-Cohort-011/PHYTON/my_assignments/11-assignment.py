#Assignment - 011/06 (Prime Numbers)
'''
Task : Print the prime numbers which are between 1 to entered limit number (n).
You can use a nested for loop.
Collect all these numbers into a list
The desired output for n=100 :
[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
Note that : This question is famous on the web, so to get more benefit from this assignment, try to complete this task on your own.
'''

last_number = int(input('Please enter a number here: '))
prime_numbers = []
for num in range(1, last_number + 1):
   if num > 1:
       for i in range(2, num):
           if (num % i) == 0:
               break
       else:
           prime_numbers.append(num)
print(prime_numbers)     