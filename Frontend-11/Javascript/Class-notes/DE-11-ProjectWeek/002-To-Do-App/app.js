let liste=[];

let total=0;

let completed=0;

const listeInput= document.querySelector("#todo-input");
const listeUl= document.querySelector("#todo-ul");
const listeButon= document.querySelector("#todo-button");
const toplam= document.querySelector("#toplam");


listeButon.onclick=()=>{

  if(!listeInput.value){
    alert("lütfen giriş yapınız")
  }
else if(liste.includes(listeInput.value))
return;

else{liste.push(listeInput.value);
total+=1;
console.log(liste);
showListe()
}
  }

const showListe=()=>{

listeUl.innerHTML += `  <li class="ayse">
      <i class="fa fa-check fa-lg"> </i>
      <p>${listeInput.value}</p>
      <i class="fa fa-trash fa-lg"></i>
    </li>`;

    toplam.textContent=total

 createSilButon();
 createCheckButon();
listeInput.value="";

listeInput.focus();
  
}

const createSilButon=()=>{

const deleteButon=document.querySelectorAll(".fa-trash");
for(let i in deleteButon){

  deleteButon[i].onclick=()=>{

// listeden silme kodu
    liste.splice(i,1)


    // ekrandan silme kodu
    deleteButon[i].parentElement.remove()
    console.log(liste);

    total=total-1;
    toplam.textContent=total;

    if(completed>0 && deleteButon[i].parentElement.className.includes("checked")){
      completed=completed-1;
      document.querySelector("#tamamlanan").textContent=completed
    }

  }
}
}
//!! classList ve className sonuç istendiğinde aynı sonucu verir tek farkla; classList bir liste, className bir isim şeklinde verir. bunu tek dezavantajı, zaten class ı olan bir elemana className="örnek" şeklinde eleman atamak istersek, varolan elemanları silip sadece örnek class ı nı atar. classList ile toggle ve contains kullanmalıyız, className ile toggle kullanamıyoruz contains yerine includes kullanmalıyız, javascriptte includes tercih edilir

const createCheckButon=()=>{

document.querySelectorAll(".fa-check").forEach((check)=>{

check.onclick=()=>{

check.parentElement.classList.toggle("checked")

// console.log(check.parentElement.classList);
if(check.parentElement.className.includes("checked"))
{
  completed=completed+1;
  // console.log(check.parentElement.className);
 

}else{

  completed=completed-1
}

document.querySelector("#tamamlanan").textContent=completed;
}

})

}

//! listeButon.onclick = (e) => {
//   if (e.target.classList.contains("far")) {
//     e.target.parentElement.remove();
//   } else if (e.target.classList.contains("fa-check")) {
//     if (e.target.parentElement.className != "checked") {
//       e.target.parentElement.className = "checked";
//     } else {
//       e.target.parentElement.className = "";
//     }
//   }
// };

//************** */
  // if (e.target.classList.contains("fa-check")) {
  //   //? ilgili li elementinde checked adinda bir class varsa class adını  sil
  //   if (e.target.parentElement.classList.contains("checked")) {
  //     e.target.parentElement.classList.remove("checked");
  //   } else {
  //     //? ilgili li elementinde checked adinda bir class yoksa ekle
  //     e.target.parentElement.classList.add("checked");
  //   }
  // }

//! Target özelliği, her zaman olay dinleyicisinin olayı tetiklediği öğeye başvuran currentTarget özelliğinin aksine, olayın orijinal olarak gerçekleştiği öğeyi alır .

