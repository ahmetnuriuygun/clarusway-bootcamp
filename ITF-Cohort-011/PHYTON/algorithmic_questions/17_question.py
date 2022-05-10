#Selam arkadaşlar , ilgilenen arkadaşlar güzel bir egzersiz paylaşıyorum . Fizzbuzz game adı verilen çocuk oyunundan. oyunda çocuklar 1den 100e kadar sırayla sayıyorlar . ancak 3ün katlarında "fizz" , 5'in katlarında "buzz" , hem 3 hem de 5'in ortak katlarında "Fizzbuzz" diye bağırıyorlar 

print("Let's play a fizz game")
numbers = int(input("Please enter a number here: "))
fizz_game = []
fizz_game.append(numbers)
for i in fizz_game :
   if i % 3 == 0 and i % 5 == 0 :
       print("Fizzbuzz!")
   elif i % 5 == 0 :
       print("Buzz!")
   elif i % 3 == 0  :
       print("Fizz!")