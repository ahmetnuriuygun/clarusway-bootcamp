# Get the total number of seconds from the user. Write a program that returns the total seconds in hours, minutes and seconds. 
# For example: 4565436 seconds is 1268 hours, 10 minutes and 36 seconds.

second_amount_user = int(input("Please enter the second amount that you want convert:  "))
minute = second_amount_user // 60
second_amount = second_amount_user % 60
hours = minute // 60
minute = minute % 60
print(f" {second_amount_user} seconds = {hours} hours , {minute} minutes , {second_amount} second")