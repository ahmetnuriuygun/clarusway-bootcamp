#Given a list, right rotate the list by n position. Write a program to shift every element of a list to circularly right. Example :
'''
num = int(input("")) = 3 
liste = [1, 2, 3, 4, 5, 6]
Output = [4, 5, 6, 1, 2, 3]

'''

list_user = [1, 2, 3, 4, 5, 6]
rotate_number = int(input("Please write a number in order to rotate our elements from right to left: "))
new_list = list_user[rotate_number:] + list_user[:rotate_number]
print(new_list)
