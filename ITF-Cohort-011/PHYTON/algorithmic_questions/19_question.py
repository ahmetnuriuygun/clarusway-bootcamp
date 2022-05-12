'''
Şimdi de geometrik şekil hesaplama işlemi yapalım. İlk olarak kullanıcıdan üçgenin mi dörtgenin mi tipini bulmak istediğini sorun. Eğer kullanıcı "Dörtgen" cevabını verirse , 4 tane kenar isteyip bu dörtgenin kare mi , dikdörtgen mi yoksa sıradan bir dörtgen mi olduğunu bulmaya çalışın. Eğer kullanıcı "Üçgen" cevabını verirse , 3 tane kenar isteyip bu üçgenin ikizkenar mı , eşkenar mı yoksa sıradan bir üçgen mi olduğunu bulmaya çalışın. Eğer verilen kenarlar bir üçgen belirtmiyorsa, ekrana "Üçgen belirtmiyor" şeklinde bir yazı yazın.o Üçgen belirtme şartını bilmiyorsunuz internetten bakabilirsiniz.
'''

sekil = input("Bir ucgenin mi yoksa dortgenin mi seklini bulmak istiyorunuz? ")
if sekil == 'Dortgen' :
    a = int(input("Lutfen birinci kenarin uzunlugunu veriniz")) 
    b = int(input("Lutfen ikinci kenarin uzunlugunu veriniz"))
    c = int(input("Lutfen ucuncu kenarin uzunlugunu veriniz"))
    d = int(input("Lutfen dorduncu kenarin uzunlugunu veriniz"))
    if a == b == c == d :
        print("Bu bir karedir.")
    elif (a == b and c == d and a != c) or (a == c and b == d and a != b) :
        print("Bur bir dikdortgendir.")   
    else : 
        print("Bu bir ozel dortgen degildir.")
elif sekil == 'Ucgen' :
    e = int(input("Lutfen birinci kenarin uzunlugunu veriniz")) 
    f = int(input("Lutfen ikinci kenarin uzunlugunu veriniz"))
    g = int(input("Lutfen ucuncu kenarin uzunlugunu veriniz"))   
    if e == f == g :
        print("Bu bir eskenar ucgendir.")
    elif (e == f != g) or (f == g != e) or (e == g != f) :
        print("Bu bir ikizkenar ucgendir.")
    elif (e-f < g < e+f) and e-g < f < e+g and f-g < e < f+g :
        print("Siradan bir ucgendir")
    else : 
        print("Ucgen degildir.")