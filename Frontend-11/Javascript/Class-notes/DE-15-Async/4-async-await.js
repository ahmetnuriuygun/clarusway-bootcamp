//*===============================================================
//*                   4- ASYNC-AWAIT
//*===============================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//?! Bu baglamda syntactic sugar benzetmesi yapilabilir.

//* Bir fonskiyonu async  hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durudurulmasini saglar. Yapilan istek yerine getirilip sonuc
//* degerlerinin dondurulmesine ile kodun calismasi devam eder.

// async function getUsers() {}

const getUsers = async () => {
  const url = 'https://api.github.com/users';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    const data = await response.json();
    updateDOM(data);
  } catch (error) {
    updateDOM(null, false);
    console.log(error);
  } finally {
    console.log('finished either success or error');
  }
};

getUsers();

const updateDOM = (data, ok = true) => {
  const usersSection = document.querySelector('.users');

  if (!ok) {
    usersSection.innerHTML = `
<h1 class="text-danger">An error occured!</h1>
<img src="./img/404.png" width="20%" alt="" />
    `;
    setTimeout(() => {
      usersSection.innerHTML = '';
    }, 2000);
    return;
  }

  data.forEach((user) => {
    const { login, avatar_url: avatar, html_url } = user;
    usersSection.innerHTML += `
<h2 class="text-success">Name: ${login}</h2>
<img src="${avatar}" width="40%"/>
<h3 class="fst-italic">${html_url}</h3><br/>
    `;
  });
};
