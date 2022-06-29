//* ===========================================================
//*                          3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

// const url = 'https://jsonplaceholder.typicode.com/users';

// fetch(url)
//   .then((response) => {
//     //? response ise fetch() fonksiyonunun cevabini gosteren bir objedir.
//     // console.log(response);
//     if (!response.ok) {
//       throw new Error(`Network response was not ok. Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     // console.log(data);
//     data.forEach((element) => {
//       console.log(`${element.name} ${element.username}
//        ${element.email}`);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const url = 'https://api.github.com/users';

fetch(url)
  .then((response) => {
    console.log(response);
    if (!response.ok) {
      throw new Error(`Fetching ${url} failed`);
    }
    return response.json();
  })
  .then((data) => {
    // console.log(data);
    updateDOM(data);
  })
  .catch((err) => {
    console.log(err);
  });

const updateDOM = (data) => {
  const usersSection = document.querySelector('.users');

  data.forEach((user) => {
    const { login, avatar_url: avatar, html_url } = user;
    usersSection.innerHTML += `
<h2 class="text-success">Name: ${login}</h2>
<img src="${avatar}" width="40%"/>
<h3 class="fst-italic">${html_url}</h3><br/>
    `;
  });
};
