#Write a Python program to get a string made of the first 2 and the last 2 chars from a given a string. If the string length is less than 2, return instead of the "Empty String"

word = str(input("Please enter a word: "))
length_word = len(word)
new_word = word[:2]+word[length_word-2:length_word]
if length_word<2 :
    print("Empty String")
else :
    print(new_word)