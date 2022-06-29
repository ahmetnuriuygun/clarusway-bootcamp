//* ======================================================================
//*                 Checkout Page Solution
//* =======================================================================
//!kargo ücreti indirim ve vergi oranlarını variable olarak atadık
const kargo = 15.0;
const vergi = 0.18;
const indirim = 0.7;

//!verilerin bilgilerini 3 object le diziye sakladık
let sepettekiler = [
  { name: "Vintage Backpack", price: 34.99, adet: 1, img: "./img/photo1.png" },
  { name: "Levi Shoes", price: 40.99, adet: 1, img: "./img/photo2.png" },
  { name: "Antique Clock", price: 69.99, adet: 1, img: "./img/photo3.jpg" },
];
//!fonksiyon calling
ekranaBastir();
  hesaplaCardTotal();
//!sepettekiler array indeki ürünleri browser a (DOM) bastırma
function ekranaBastir() {
  sepettekiler.forEach((ürün) => {
    //!DESTRUCTURİNG
    const { name, price, adet, img } = ürün;

    document.querySelector(
      "#ürün-panel"
    ).innerHTML += `<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-5">
      <img src=${img} class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
             <div class="ürün-price">
                    <p class="text-warning h2">$
                      <span class="indirim-price">${(price * indirim).toFixed(
                        2
                      )}</span>
                      <span class="h5 text-dark text-decoration-line-through">${price}</span>
                    </p>
                  </div>

                  
                  <div
                    class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2"
                  >
                    <div class="adet-controller">
                      <button class="btn btn-secondary btn-sm">
                        <i class="fas fa-minus"></i>
                      </button>
                      <p class="d-inline mx-4" id="ürün-adet">${adet}</p>
                      <button class="btn btn-secondary btn-sm">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div class="ürün-removal mt-4">
                    <button class="btn btn-danger btn-sm w-100 remove-ürün">
                      <i class="fa-solid fa-trash-can me-2"></i>Remove
                    </button>
                  </div>
                  <div class="mt-2">
                    Ürün Toplam: $<span class="ürün-toplam">${(
                      price *
                      indirim *
                      adet
                    ).toFixed(2)}</span>
                  </div>
      </div>
    </div>
  </div>
</div>`;
  });

  silButon();

  adetButon();

  //!browser da en alttaki total kısmı
  document.querySelector("#card-prices").innerHTML = `<table class="table">
            <tbody>
              <tr class="text-end">
                <th class="text-start">Aratoplam</th>
                <td>$<span class="aratoplam">0.00</span></td>
              </tr>
              <tr class="text-end">
                <th class="text-start">Vergi(18%)</th>
                <td>$<span class="vergi">0.00</span></td>
              </tr>
              <tr class="text-end">
                <th class="text-start">Kargo</th>
                <td>$<span class="kargo">0.00</span></td>
              </tr>
              <tr class="text-end">
                <th class="text-start">Toplam</th>
                <td>$<span class="toplam">0.00</span></td>
              </tr>
            </tbody>
          </table>`;
}
//!bütün remove butonlarını çağırıp tıklananı remove fonksiyonuna gönderdik
function silButon() {
  document.querySelectorAll(".remove-ürün").forEach((btn) => {
    btn.onclick = () => {
      remove(btn);
    };
  });
}
//!bu fonksiyon hem remove ile hem adet 1 kaldığında minus butonuna basınca çalışacak
function remove(btn) {
  //!ekrandan sil. gelen butonun en üstteki .card class lı parent ı silinecek
  btn.closest(".card").remove();

  //!diziden sil
  // console.log(btn.closest(".card").querySelector("h5"));

  sepettekiler = sepettekiler.filter(
    (ürün) => ürün.name != btn.closest(".card").querySelector("h5").textContent
  );
  console.log(sepettekiler);
  //!en altta totalde gözüksün, diziye bişey yapmaya gerek yok bu aşamada
    hesaplaCardTotal();

}
//! minus plus butonlarının parentını çağırıp firselement minus, lastelement plus, ürün-adet class ismiyle çağırılan adetin yazdığı bölme
function adetButon() {
  document.querySelectorAll(".adet-controller").forEach((i) => {
   const minus=i.firstElementChild;
   const adet1 = i.querySelector("#ürün-adet");
   minus.onclick=()=>{
     //!minus adet değişim ekrana bastırması
     adet1.textContent = Number(adet1.textContent) - 1;

     //! eğer adet 1 iken tekrar minus a basılırsa minus butonu remove fonksiyonuna gitsin, parentı bulunup silinsin
     console.log(sepettekiler);
     if (adet1.textContent == 0) {
       alert("sileyim mi");
       remove(minus);
     }
     //????????????????????????????????????BU KISIM HEM MİNUS HEM PLUS TA VAR FONKSİYON A ATILABİLİR
     //!diziyi güncelle
     sepettekiler.map((ürün) => {
       if (
         ürün.name ==
         adet1.closest(".row").querySelector(".card-title").textContent
       )
         ürün.adet = Number(adet1.textContent);
     });

     //!ürün toplam ekrana bastırması. her üründe olan toplam kısmı
     adet1.closest(".row").querySelector(".ürün-toplam").textContent = (
       adet1.closest(".row").querySelector(".indirim-price").textContent *
       adet1.textContent
     ).toFixed(2);
     hesaplaCardTotal();
     console.log(sepettekiler);
     //??????????????????????????????????????????????????????????????
   }
  //! plus a basınca minus a benzer işlemler
const plus=i.lastElementChild
plus.onclick=()=>{
  adet1.textContent = Number(adet1.textContent) + 1;
//????????????????????????????????????BU KISIM HEM MİNUS HEM PLUS TA VAR FONKSİYON A ATILABİLİR
  //!diziyi güncelle
  sepettekiler.map((ürün) => {
    if (
      ürün.name ==
      adet1.closest(".row").querySelector(".card-title").textContent
    )
      ürün.adet = Number(adet1.textContent);
    console.log(sepettekiler);
  });
  //!ürün toplam ekrana bastırması. her üründe olan toplam kısmı
    adet1.closest(".row").querySelector(".ürün-toplam").textContent = (
    adet1.closest(".row").querySelector(".indirim-price").textContent *
    adet1.textContent
  ).toFixed(2);
  hesaplaCardTotal();
  //???????????????????????????????????????????????????????????????????????????????????????????
}
});

}

//! Calculate and update card total values
function hesaplaCardTotal() {
  //! her bir card daki ürün toplam kısımları
  const ürünToplam = document.querySelectorAll(".ürün-toplam");
  //  console.log([...ürünToplam]);

  console.log(Array.from(ürünToplam));
  console.log(ürünToplam);
  //!  Bir NodeListnesne, bir belgeden çıkarılan düğümlerin bir listesidir

  //? araToplam= en alttaki tüm ürünler için vergi kargo hariç sepettekiler fiyatı
  //?Reduce tam olarak Array istiyor, nodelist yeterli değil

  //*önce hesapla sonra altta browser a (DOM) bastır
  const araToplam = Array.from(ürünToplam).reduce(
    (acc, item) => acc + Number(item.textContent),
    0
  );
  const vergiPrice = araToplam * vergi;
  const shipping = araToplam > 0 ? kargo : 0;
  const cardTotal = araToplam + shipping + vergiPrice;

  document.querySelector(".aratoplam").textContent = araToplam.toFixed(2);
  document.querySelector(".vergi").textContent = vergiPrice.toFixed(2);
  document.querySelector(".kargo").textContent = shipping.toFixed(2);
  document.querySelector(".toplam").textContent = cardTotal.toFixed(2);
}
