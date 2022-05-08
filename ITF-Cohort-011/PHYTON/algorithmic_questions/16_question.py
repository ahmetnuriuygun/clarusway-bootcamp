'''
Kullanıcıdan integer bir değer alan ve sayının pozitif-çift sayı olup olmadığını kontrol eden program yazınız. Girilen sayıların muhtemel farklı durumlarını göz önünde bulundurunuz. (negatif, string vs. gibi durumlar)
'''

number = input("Please enter a number here: ")
if number.isnumeric() :
    if int(number) > 0 :
        if int(number) % 2 == 0 :
            print('It is a positif and even number')
        elif int(number) % 2 != 0 :   
            print('It is a odd number')
    elif int(number) <= 0 :
        print('It is a negatif number')          
else : 
    print('It is not a number')