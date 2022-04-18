# Assignment - 011/02 (Measure Converter)

'''
1.   Write a short Python program that asks the user to enter Celsius temperature (it can be a decimal number), converts the entered temperature into Fahrenheit degree and prints the result.


2.   Write a short Python program that asks the user to enter a distance (it can be a decimal number) in kilometers, converts the entered distance into miles and prints the result

'''

fahr = 'Fahrenheit'
cel = 'celcius'
cel = input("Celcius :")
fahr = 32 + (1.8*float(cel))
print(fahr)

km = 'kilometre'
mil = 'mile'
x = 0.621371
km = (input("kilometre:"))
mil = x * float(km)
print(mil)