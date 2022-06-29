// ? ==========================================================
// ?                   FONKSİYONLAR-SCOPE
// ? ==========================================================
console.log("************ 4- SCOPE *************");


//!global scope
let birinci=5;
let ikinci=123;
let ücüncü=2534;
console.log(birinci , ikinci, ücüncü);

const fonksiyon=function(){

birinci=10;
let ikinci=256;
let dördüncü=0;

console.log(birinci, ikinci,ücüncü,dördüncü);

}

fonksiyon();

console.log(birinci, ikinci, ücüncü);//10 123  2534

