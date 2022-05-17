#Assignment - 011/08 (Letter Count)
'''
Task:

Count the number of each letter in a sentence.
The department you work for undertook a project construction that makes word / text analysis. You are asked to calculate the number of letters or any chars in the sentences entered under this project.
Write a Python program that;
takes a sentence from the user, counts the number of each letter/chars of the sentence,
collects the letters/chars as a key and the counted numbers as a value in a dictionary.

'''
'''
hippo runs to us!
{'s': 2, 'r': 1, 't': 1, 'h': 1, 'n': 1,
'i': 1, 'u': 2, 'o': 2, 'p': 2, ' ': 3, '!': 1}

'''

my_dict = {}
user = input('Please enter a sentence')
for i in user :
    if i in my_dict :
       my_dict[i] += 1
    else :
       my_dict[i] = 1
print(my_dict)   