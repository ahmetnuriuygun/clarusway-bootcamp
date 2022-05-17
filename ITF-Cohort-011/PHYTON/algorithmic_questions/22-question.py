#Kullanıcıdan 2 tane sayı alarak bu sayıların en küçük ortak katını (EKOK) bulan bir program yazınız.mümkün olduğunca en kısa halini yazınız..

number1 = int(input("Please enter first number here: "))
number2 = int(input("Please enter second number here: "))
set_ekok_1 = set()
set_ekok_2 = set()
for i in range(number2,100) :
    if i % number1 == 0 :
        set_ekok_1.add(i)

for i in range(number2,100) :
    if i % number2 == 0 :
        set_ekok_2.add(i)
ekok = min(set_ekok_1.intersection(set_ekok_2))
print(ekok)