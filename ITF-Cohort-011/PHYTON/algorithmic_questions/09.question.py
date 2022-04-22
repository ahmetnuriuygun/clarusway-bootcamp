#Write a program to check if a given string is a Palindrome. A palindrome reads same from front and back e.g.- aba, ccaacc, mom, etc.
'''
INPUT: aba
OUTPUT: True
INPUT: berlin
OUTPUT: False
'''

word = str(input("Please enter a word: "))
if word[:] == word[::-1] :
    print(True)
else :
    print(False)   