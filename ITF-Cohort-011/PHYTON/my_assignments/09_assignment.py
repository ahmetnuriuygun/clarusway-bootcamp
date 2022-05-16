#Assignment - 011/05 (Fibonacci Numbers)
'''
Task : Create a list consisting of Fibonacci numbers from 1 to 55 using control flow statements and range() function.
fibonacci → [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
'''

f1 = 1

f2 = 1

fibonacci =[f1,f2]

while len(fibonacci) < 10 :
    
    f1,f2 = f1+f2, f1
    
    fibonacci.append(f1)
    
print(fibonacci)    
