#Print the 5 numbers you will receive from the user in a sequential manner.

print("Give me five number and I will order it ")
ordered = []
for i in range(5) :
    numbers = (int(input("Please enter here numbers: ")))
    ordered.append(numbers) 
ordered.sort()
print(ordered)   
  