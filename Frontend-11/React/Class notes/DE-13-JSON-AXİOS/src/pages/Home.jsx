import AddBilgi from "../components/AddBilgi"
import BilgiList from "../components/BilgiList"
import {useState,useEffect} from "react";
 import axios from 'axios';

const Home = () => {
  const [bilgiler, setBilgiler] = useState([]);

  const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";

  //!burada bir dizi oluşturup database deki dataları buradaki dizime attım, ve buradaki bilgiler dizisini BilgiList componentinde ekrana bastıracağım database deki her değişiklikte bu işlemi tekrar ederek kendi dizimi (ekrana bastıracağım bilgiler dizisini) güncellemiş oldum
  //! GET (Read)
  const getBilgiler = async () => {
    const { data } = await axios.get(url);
    setBilgiler(data);
  };

  //? Sadece Component mount oldugunda istek yapar
  useEffect(() => {
    getBilgiler();
  }, []);

  console.log(bilgiler);


  //!database url sini child lara göndermek istemiyorum, bütün axios işlemleri bu sayfada bulunsun istiyorum, o yüzden put post delete işlemlerini burada yazıp, gerekli çocuk ve torunlara göndericem
  //! addBilgi fonksiyonu (post işlemi için) AddBilgi componentinde çalışmalı, çünkü verileri gireceğimiz inputlu form yapısı orada. bu yüzden mecburen Home da tanımladığım addBilgi fonksiyonunu child a (AddBilgi ye) yolluyorum props la. post işlemi bütün hatlarıyla child da artık, orada inputlara girilen veri submit edildiği anda buraya düşer ve post sayesinde database e kaydolur
  //! POST (Create)
  const addBilgi = async (yeniVeri) => {
    // console.log(z);
    await axios.post(url, yeniVeri);
    getBilgiler();
  };
//! yine delete işlemi aslında BilgiList componentindeki çöp icon una tıklanınca gerçekleşmeli, ama axios dan delete işlemini bu sayfada tanımladığım için, yine child a kullansın diye yolluyorum propsla. fonksiyon bütün hatlarıyla child a gider, orada tıklanan id li veriyi alıp alttaki yolla siler
  //! DELETE (delete)
  const deleteBilgi = async (id) => {
    await axios.delete(`${url}/${id}`);

    getBilgiler();
  };
//! güncelleme işlemi ilk önce çocuk (BilgiList) teki kalem iconuna tıklayınca tetikleniyor ve sonrasında torun sayfası (modal-form yapılı) açılıyor. biz yine axios la put işlemini dede (Home) da tanımlayıp çocuğa yollamalı, orada icon a tıklanınca açılacak olan toruna yollamalıyız, direk toruna yollayamayız, çünkü torun babasındaki icon tıklanınca açılıyor, dedeyle direk teması yok. burada put tanımlanıyor oradan çocuğa, icon tıklanınca çalışmak üzere gidiyor, gerisi diğer sayfada olacak
  //! Update (PUT:tüm Update,PATCH :kısmen Update)
  const degistir = async (bilgi) => {
    // console.log(bilgi);
    await axios.put(`${url}/${bilgi.id}`, bilgi);
    getBilgiler();
  };

  return (
    <>
      <AddBilgi addBilgi={addBilgi} />
      <BilgiList
        bilgiler={bilgiler}
        deleteBilgi={deleteBilgi}
        degistir={degistir}
      />
    </>
  );
};

export default Home;
