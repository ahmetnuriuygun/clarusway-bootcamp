'''
basit bir banka atm programı:
-atm de işlem yapmak istiyormusunuz (evet veya hayır) evet ise
-para çekme(mevcut bakiyeden fazla para çekemez)
-para yatırma(100 bin liradan üstü için atmden işlem yapılamaz)
-hesap bilgileri(ad,soyadi,iban ve mevcut bakiye)
-kart iade
-kart iade denilmeden döngüden çıkılamaz
'''

ad_soyad = input('Lutfen adinizi ve soyadinizi giriniz: ')
sifre =int(input('4 haneli sifrenizi giriniz:'))
mevcut_bakiye = 2500

if sifre == 1234 : 
    print('1-Para Cekme')
    print('2-Para yatirma')
    print('3-Hesap Bilgilerini Ogrenme')
    islem = int(input('Lutfen yapmak istediginiz islemi seciniz: '))
    if islem == 1 :
        istenen_tutar = int(input('Cekmek istediginiz tutar: '))
        if istenen_tutar > mevcut_bakiye :  
           print('Hesabinizda yeterli bakiye bulunmamaktadir/')
        else :
           print(f"Ilk once paranizi({istenen_tutar}) sonra kartinizi aliniz. ")
    elif islem == 2 :
        yatirilan_tutar = int(input('Yatirmak istediginiz tutari giriniz: '))   
        if yatirilan_tutar < 100000 :
            print('Yatirmak istedigiz parayi duzgunce bankamatige yerlestiriniz ve kartinizi almayi unutmayiniz. ')    
        else :
            print('100.000 tl ve uzeri islemler icin atmden islem yapilamaz.')  
    elif islem == 3  :
            print(f"{ad_soyad}")
            print(f"{mevcut_bakiye} Turk Lirasi")
            print('Lutfen kartinizi almayi unutmayiniz.')

else :
    print("Sifrenizi yanlis girdiniz.")