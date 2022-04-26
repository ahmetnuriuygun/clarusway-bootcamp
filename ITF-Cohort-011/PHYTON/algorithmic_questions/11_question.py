#Rank the 10 numbers you will receive from the user from smallest to largest. Also, print the odd ones in a separate list and the even ones in a separate list.

sayi1 = int(input("Please enter a number: "))
sayi2 = int(input("Please enter a number: "))
sayi3 = int(input("Please enter a number: "))
sayi4 = int(input("Please enter a number: "))
sayi5 = int(input("Please enter a number: "))
sayi6 = int(input("Please enter a number: "))
sayi7 = int(input("Please enter a number: "))
sayi8 = int(input("Please enter a number: "))
sayi9 = int(input("Please enter a number: "))
sayi10 = int(input("Please enter a number: "))

unordered_list = [sayi1,sayi2,sayi3,sayi4,sayi5,sayi6,sayi7,sayi8,sayi9,sayi10]
unordered_list.sort()

tek_list = []
cift_list = []

for i in unordered_list :
  if i%2 == 0 :
    cift_list.append(i)
  else :
    tek_list.append(i)  

print(unordered_list)
print(cift_list)
print(tek_list)