#Write a Python program to get a string from a given string where all occurrences of its first char have been changed to '€', except the first char itself
'''
For example : 
input = abdullah 
output  = abdull€h 
'''

word = input("lutfen bir kelime giriniz: ")

new_word = word[0]+(word[1:].replace(word[0],'€')) 
    
print(new_word)