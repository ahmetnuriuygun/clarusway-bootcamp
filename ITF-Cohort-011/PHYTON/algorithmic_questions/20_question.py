#Kullanıcıdan aldığınız bir sayının mükemmel olup olmadığını bulmaya çalışın. Bir sayının kendi hariç bölenlerinin toplamı kendine eşitse bu sayıya "mükemmel *sayı" denir.
#  Örnek olarak, 6 mükemmel bir sayıdır . (1 + 2 + 3 = 6) *

number = int(input("Bir sayi giriniz: "))
sum = 0
for x in range (1,number) :
    if number % x == 0 :
        sum += x
        x += 1
if sum == number :
  print(f"{number} is a perfect number .")
else :
  print(f"{number} is not a perfect number") 