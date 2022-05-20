#Make a solution that takes a list of numbers or strings and returns a list with the items from the original list stored into sublists. Items of the same value should be in the same sublist.
'''

[2, 1, 2, 1] ➞ [[2, 2], [1, 1]
[5, 4, 5, 5, 4, 3] ➞ [[5, 5, 5], [4, 4], [3]]
["b", "a", "b", "a", "c"] ➞ [["b", "b"], ["a", "a"], ["c"]]


'''
lst = ["b", "a", "b", "a", "c"]
elements = {}
for i in lst :
    if i not in elements :
        elements[i] = [i]
    else :
        elements[i] += [i]  
print(list(elements.values()))   
