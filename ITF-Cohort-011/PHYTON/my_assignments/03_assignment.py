#Assignment - 011/03 (Covid - 19 Risk)
'''
Problem :
Task : Estimating the risk of death from coronavirus.
Consider the following questions in terms of True/False regarding anyone else.

1)Are you a cigarette addict older than 75 years old? Variable → age
2)Do you have a severe chronic disease? Variable → chronic
3)Is your immune system too weak? Variable → immune

Set a logical algorithm using boolean logic operators (and/or) and the given variables in order to give us True (there is a risk of death) or False (there is not a risk of death) as a result 
'''

print('Please answer the following questions wih Yes or No: ')

age = str(input('Are you a cigarette addict older than 75 years old:  '))

if age == ('Yes') :
   x = True
  
elif age == ('No') :
   x = False

chronic = str(input('Do you have a severe chronic disease?:   '))

if chronic == ('Yes') :
   y = True

elif chronic == ('No') :
   y = False

Immune = str(input('Is your immune system too weak?:   '))

if Immune == ('Yes') :
   z = True

elif Immune == ('No') :
   z = False 

phrase = x or y or z

if phrase == True :
  print('There is a risk of death')

elif phrase == False :
   print('There is not a risk of death') 

   