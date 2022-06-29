//* ======================================================
//*                   GETELEMENTBYID()
//* ======================================================

//*example-1 (Button style)

const buton= document.getElementById("btn");
buton.style.width="200px";
buton.style.height="80px";
buton.style.backgroundColor="black";
buton.style.color="yellow";
buton.style.fontSize="38px";
buton.textContent="ARA";

//*example-2 (paragraf style)

const paragraf=  document.getElementById("par").style;

paragraf.backgroundColor="black";
paragraf.color="yellow";
paragraf.fontSize="50px";
paragraf.padding="5px";

//* ======================================================
//*                   GETELEMENTSBYTAGNAME()
//* tag ismiyle çağırıyoruz.aynı tag den çok olacağı için index le hangisini seçtiğimizi belirtiyoruz
//*================================================

//*example-3  (img style)

const resim= document.getElementsByTagName("img");

resim[0].style.width="300px";
resim[1].style.border="5px solid red";

//* ======================================================
//*                   GETELEMENTSBYCLASSNAME()
//* class ismiyle çağırıyoruz
//*======================================================

 const baslik= document.getElementsByClassName("H1");

 baslik[0].style.color="red";
 baslik[0].style.textAlign="center";

 baslik[0].innerHTML="<a href='http://www.clarusway.com'> DOM is very easy</a>";


//* ======================================================
//*                  QUERYSELECTOR
//*======================================================

  document.querySelector("title").textContent="DOM MANUPULATİON 💜";

  document.querySelector("#badi").style.backgroundImage="linear-gradient(green,pink)"

  document.querySelector(".H2").style.color="blue"

   const parag= document.querySelectorAll("p")

parag[0].style.color="red";

