#Soru 1 --> 1'den 10000 bine kadar Amicable (Dostane) sayıları yazınız.

'''
Amicable numbers --> a'nın tam bölenleri = b , b'nin tam bölenleri = a
'''
a = int(input('Please enter a number here: '))
b = int(input('Please enter second number here: '))
a_list = []
b_list = []
x = a / 2
y = b / 2
for i in range(int(x)+1) :
  if i % a == 0 :
      a_list.append(i)
for i in range(int(y)+1) :
  if i % b == 0 :
      b_list.append(i)   
if sum(a_list) == sum(b_list) :
      print(f'{a} and {b} are amicable numbers.') 