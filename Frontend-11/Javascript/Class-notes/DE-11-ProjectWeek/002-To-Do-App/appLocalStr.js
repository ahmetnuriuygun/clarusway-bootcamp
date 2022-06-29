let todos = JSON.parse(localStorage.getItem("todos")) ?? [];
const todoUl = document.querySelector("#todo-ul");
// ekranda yazan todo lar
const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-button");


//? Add Buton is clicked.inputa veri girilip buton tıklandığında todos dizisine inputtaki value eklensin.sonra bunu showTodos() fonk gidip sayesinde ekrana bastır
document.querySelector("#todo-button").addEventListener("click", () => {
  if (!todoInput.value) {
    alert("Please Enter your todos");
  } else {
    todos.push(todoInput.value);
    localStorage.setItem("todos", JSON.stringify(todos));
    showTodos();
  }
});
const showTodos = () => {
  // add e basıldığında hafızaya task eklenecek, ekrana basmak üzere buraya gelecek, geldiğinde,localStorage deki verileri (ul listesinde bulunan, ekranda duran) baştan tekrar girmemesi için ul nin ekrandaki görüntüsünü temizliyoruz
   todoUl.textContent = "";
  // localstorage daki verileri ekrana baştan yazdır
  // başka türlü olmaz mesela girilenle aynısı todos ta yoksa yazdır desek, aynı şeyi girmek isteyebiliriz
  todos.forEach((todo) => {
    todoUl.innerHTML += `
    <li>
      <i class="fa fa-check fa-lg"> </i>
      <p>${todo}</p>
      <i class="fa fa-trash fa-lg"></i>
    </li>`;
  });
  createDeleteBtns();
  createCheckBtns();

  todoInput.value = "";
  todoInput.focus();
};

const createDeleteBtns = () => {
  // deleteBtns=nodelist=nesnedir, foreach olmaz
  const deleteBtns = document.querySelectorAll(".fa-trash");
  for (let i in deleteBtns) {
    deleteBtns[i].onclick = () => {
      todos.splice(i, 1);

      //ekrana bastırmak için 1. yol
     deleteBtns[i].parentNode.remove();
     //ekrana bastırmak için 2. yol
  // showTodos();
        localStorage.setItem("todos", JSON.stringify(todos));
      
    };
  }
};

const createCheckBtns = () => {
  const checkBtns = document.querySelectorAll(".fa-check");
  for (let i in checkBtns) {
    checkBtns[i].onclick = () => {
      if (checkBtns[i].parentElement.className.includes("checked")) {
        //includes yerine eşittir desekte olur
        checkBtns[i].parentElement.className = "";
      } else {
        checkBtns[i].parentElement.className = "checked";
      }
    };
  }
};




//? Enter button is pressed
todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") todoButton.click();
});

//? Start the app
showTodos();
