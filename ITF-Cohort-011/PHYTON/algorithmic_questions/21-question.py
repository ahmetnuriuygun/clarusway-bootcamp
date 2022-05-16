#Kullanıcıdan 2 tane sayı alarak bu sayıların en büyük ortak bölenini (EBOB) bulan bir program yazınız. mümkün olduğunca en kısa halini yazınız..

number1 = int(input("Please enter first number here: "))
number2 = int(input("Please enter second number here: "))
set_ebob_1 = set()
set_ebob_2 = set()

for i in range(1,number1) :
    if number1 % i == 0 :
        set_ebob_1.add(i)

for i in range(1,number2) :
    if number2 % i == 0 :
        set_ebob_2.add(i)

ebob = max(set_ebob_1.intersection(set_ebob_2))
print(ebob)         