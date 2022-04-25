#Write a program that takes a maximum two-digit (1-99) number from the user and finds the pronunciation of that number. For example: İnput:97 Output:Ninety Seven

number1 = int(input("Please enter two-digit number: "))

dict1 = {10 : 'Ten',
         20 : 'Twenty',
         30 : 'Thirty',
         40 : 'Fourty',
         50 : 'Fifty',
         60 : 'Sixty',
         70 : 'Seventy',
         80 : 'Eighty',
         90 : 'Ninety',
        }

dict2 = {1 : 'One',
         2 : 'Two',
         3 : 'Three',
         4 : 'Four',
         5 : 'Five',
         6 : 'Six',
         7 : 'Seven',
         8 : 'Eight',
         9 : 'Nine',
        }

number2 = number1%10
number3 = number1-number2

output = (dict1[number3]+dict2[number2])
print(output)