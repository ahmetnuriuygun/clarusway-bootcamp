'''
Arkadaşlar ilginç bir soru denk geldi.. ilgisini çekenler için ----------Sınırsız ürün bilgisi programı------------
Ürün sayısını kullanıcıya sorun
Dictionary yapısı (adı,adet fiyatı,adeti) şeklinde olsun.
Ürün ekleme işlemi bittiğinde tüm ürünleri "ürünün adı .... ürünün fiyatı ... adeti ... toplamfiyatı " şeklinde ekrana yazdıralım.
'''

urun_sayisi = int(input("Lutfen urun sayisini giriniz: "))
for i in range(1, urun_sayisi+1):
  x =str(input("Urun adi: "))
  y =int(input("Urun adet fiyati: "))
  z =int(input("Urun adeti: "))
  print(f"Urunun adi = {x}, Urunun fiyati = {y}, Urunun toplam fiyati= {y*z}", sep = '\n')  