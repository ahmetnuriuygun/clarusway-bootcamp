'''
Tom, a 13-year-old boy, wants to play with PlayStation-4. Since he couldn't afford it, he started to save money to reach the price of PS4 (variable ). Let's write a program to tell him how much time left before he can play with PS4. So write a simple code that gets the amount of money Tom saved and prints one of the three options below according to ps4_pricesaved_amount
-If is less than or equal to then print : "You must save more, keep saving!"saved_amountps4_price/2
-If is greater than then print : "You saved more than half, keep saving!"saved_amountps4_price/2
-If is greater than then print : "Yippee! You can buy your PS4"saved_amountps4_price
Note: Variable is created for you. You can use it in your code without defining it.ps4_price

'''
saved_amount = int(input("Please enter your saved amount: "))
ps4_price = 300
if saved_amount >=  ps4_price :
    print("Yippee! You can buy your PS4")
elif (ps4_price/saved_amount) < 2 :
        print("You saved more than half, keep saving!")
else :
        print("You must save more, keep saving!")
