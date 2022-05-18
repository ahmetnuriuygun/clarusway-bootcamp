'''
Write a program that switches the values stored in the variables a and b. (a ve b değişkenlerinde bulunan değerleri değiştiren bir program yazın.)
input :
a = 3
b = 5
output:
a = 5
b = 3
'''
def my_values(a,b) :
    a,b = b,a
    return a,b
    
a = int(input("Please enter a number here: "))
b = int(input("Please enter second number here: "))

print(my_values(a,b))