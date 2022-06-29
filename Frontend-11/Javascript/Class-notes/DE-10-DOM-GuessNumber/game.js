const check = document.querySelector(".check");
const body = document.querySelector("body");
let rastgele = Math.ceil(Math.random() * 20);
console.log(rastgele);
const msg = document.querySelector(".msg");


const again = document.querySelector(".again");
let score = 10;
let TopScore = 0;
console.log(rastgele);
check.onclick = () => {

    const guess = document.querySelector(".guess");
    while (score > 0) {
        if (rastgele == guess.value) {
           
            document.querySelector(".number").textContent = rastgele;
            body.style.backgroundColor = "green";
            msg.textContent = "Tebrikler";
if (score > TopScore) {
  document.querySelector(".top-score").textContent = score;
}

            break;
        }
        else if (rastgele < guess.value) {
            score--;
        document.querySelector(".score").textContent = score;
          
            body.style.backgroundColor = "red";
            msg.textContent = "Azaltin";
            break
        }
        else if (rastgele > guess.value) {
            score--;
         
    document.querySelector(".score").textContent = score;
            
            body.style.backgroundColor = "red";
            msg.textContent = "Artirin";
            break
        }
    }
    if (score == 0) {
        body.style.backgroundColor = "red";
        msg.textContent = "Sie haben verloren";
       document.querySelector(".score").textContent = score;
        
    }
}
//? Again butonuna basıldığında
again.onclick = () => {
    rastgele = Math.ceil(Math.random() * 20);
    console.log(rastgele);
    score = 10;
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector("body").style.backgroundColor = "#2D3436";
    msg.textContent = "Starting...."
    document.querySelector(".guess").value = "";
}
