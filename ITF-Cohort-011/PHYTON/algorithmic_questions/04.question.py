# Program that prints the reverse of the number given in integer format without using a loop, leaving a space between them. For example : num = 7356 Output = 6537

num =int(input("Please enter a 4 digit number here: "))
first = num//1000 
second = (num%1000)//100
third = ((num%1000)%100)//10
fourth = num%10
output = fourth*1000 + third*100 + second*10 + first*1
print(num, output, sep ='\n')
