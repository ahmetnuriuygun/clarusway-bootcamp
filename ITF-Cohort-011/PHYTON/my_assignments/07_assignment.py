#Assignment - 011/03 (Armstrong Numbers)
'''
Find out if a given number is an "Armstrong Number".An n-digit number that is the sum of the nth powers of its digits is called an n-Armstrong number. Examples :
371 = 3 ** 3 + 7 ** 3 + 1 ** 3;
9474 = 9 ** 4 + 4 ** 4 + 7 ** 4 + 4 ** 4
93084 = 9 ** 5 + 3 ** 5 + 0 ** 5 + 8 ** 5 + 4 ** 5
Write a Python program that;
takes a positive integer number from the user,
checks the entered number if it is Armstrong,
consider the negative, float and any entries other than numeric values then display a warning message to the user.
'''

number = input("Please enter a number")
controller = 0
result = ""
if number.isnumeric :
  str_number = str(number)
  for i in str_number:
    controller += int(i) ** len(number)
  if controller == int(number):
    result = "This number is Armstrong Number"
    print(result)
  else:
    result = "This number is not an Armstron Number"
    print(result)
else : 
    print(" It is an invalid entry. Don't use non-numeric, float, or negative values!")   