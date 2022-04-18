#Assignment - 011/02(Comfortable Words)
'''
Task : Find out if the given word is "comfortable words" in relation to the ten-finger keyboard use.

-A comfortable word is a word which you can type always alternating the hand you type with (assuming you type using a Q-keyboard and use of the ten-fingers standard)

-The word will always be a string consisting of only letters from a to z.

-Write a program which returns True if it's a comfortable word or False otherwise

'''

left_hand = set('qwertasdfgzxcvb')
right_hand = set('yuiophjklnm')
word = input("Please enter a word: ")
word_1 = set(word)
leftcheck = bool(word_1.intersection(left_hand))
rightcheck = bool(word_1.intersection(right_hand))
sonuc = leftcheck and rightcheck
if sonuc == True :
    print("It is a comfortable word")
else : 
    print("It is not a comfortable word")