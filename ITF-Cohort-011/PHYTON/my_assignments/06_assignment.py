#Assignment - 011/02 (Covid-19 Risk with if Statements)
'''
Problem :
Task : Estimating the risk of death from coronavirus. Write a program that;
Takes "Yes" or "No" from the user as an answer to the following questions :
Are you a cigarette addict older than 75 years old? Variable → age
Do you have a severe chronic disease? Variable → chronic
Is your immune system too weak? Variable → immune
Set a logical algorithm using boolean logic operators (and/or) and use if-statements with the given variables in order to print out us a message : "You are in risky group"(if True ) or "You are not in risky group" (if False).
'''

print("Please answer the next questions with Yes or False")

age = bool(input("Are you a cigarette addict older than 75 years old?: "))
chronic = bool(input("Do you have a severe chronic disease?: "))
immune = bool(input("Is your immune system too weak?: "))

 
risk = age or chronic or immune

if  risk == True :
    print("You are in risky group")
elif risk == False :
    print("You are not in risky group")