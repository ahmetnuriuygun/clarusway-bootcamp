//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basariyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron Programlama
//* --------------------------------------------------------------
// ! blocking code
// const bekle = (ms) => {
//   const start = new Date().getTime();
//   while (new Date().getTime() < start + ms) {
//     // do nothing
//   }
// };

// console.log('hello');
// console.time('timer1');
// bekle(3000);
// console.timeEnd('timer1');
// console.log('how are you');

//* Asenkron (setTimeout)
//* ---------------------------------------------------------------
//? callback hell
// setTimeout(() => {
//   console.log('matthew: SA Ferhat');
//   setTimeout(() => {
//     console.log('ferhat: SA Matthew');
//     setTimeout(() => {
//       console.log('Ahmet: kolay gelsin');
//       setTimeout(() => {
//         console.log('ferhat: buyrun nasıl yardımcı olurum');
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

// console.log('ferhat: AS Matthew');
// console.log('ferhat: nasıl gidiyor?');
// setTimeout(() => {
//   console.log('ferhat: dostum nasılsın?');
// }, 0);

// console.log('Ahmet: kolay gelsin');

//* Asenkron (setInterval, clearInterval)
//*----------------------------------------------------------
//? setInterval

console.log('counter started');

let counter = 0;

const interval1 = setInterval(() => {
  console.log(++counter);
  if (counter === 5) {
    clearInterval(interval1);
  }
}, 1000);
