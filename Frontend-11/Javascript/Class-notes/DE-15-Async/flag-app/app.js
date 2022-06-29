//* =======================================================================
//*                          FLAG-APP
//* =======================================================================

document.querySelector('#search').addEventListener('click', () => {
  const countryName = document.querySelector('#input').value;
  viewCountry(countryName);
});

document.getElementById('clear').addEventListener('click', () => {
  const main = document.querySelector('main');
  main.innerHTML = '';
});

const viewCountry = async (countryName) => {
  try {
    const country = await getCountry(countryName);
    renderCountry(country);
    if (country.borders) {
      for await (const item of country.borders) {
        const neighbour = await getNeighbour(item);
        renderCountry(neighbour, 'neighbour');
      }
    } else {
      console.log('komşu yok');
      throw new Error('No Neighbour!');
    }
  } catch (error) {
    renderError(error);
  }
};

const renderCountry = (data, type = 'country') => {
  // ! destructuring
  const {
    region,
    population,
    capital,
    languages,
    currencies,
    name: { common: countryName },

    flags: { svg: flag },
  } = data;
  const countryCard = `
  <img src=${flag} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${countryName}</h5>
    <p class="card-text">${region}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"> <i class="fas fa-lg fa-landmark"></i> ${capital}</li>
    <li class="list-group-item"><span><i class="fas fa-lg fa-users"></i> ${(
      population / 1_000_000).toFixed(1)} M</span></li>
    <li class="list-group-item"> <i class="fas fa-lg fa-comments"></i> ${Object.values(languages)}
    </li>
    <li class="list-group-item"> <i class="fas fa-lg fa-money-bill-wave"></i> ${
      Object.values(currencies)[0].name
    }, ${Object.values(currencies)[0].symbol}</li>
    </ul>
`;
  if (type === 'country') {
    const mainCountryHtml = `
<div class="container country">
<div class="row justify-content-center mt-5">
  <div class="card country-card col col-sm-6 col-lg-3 py-3" >
    ${countryCard}
  </div>
</div>
<div class="row justify-content-start neighbour-container">
</div>
  `;
    const mainElement = document.querySelector('main');
    mainElement.insertAdjacentHTML('afterbegin', mainCountryHtml);
  } else if (type === 'neighbour') {
    const neighbourHtml = `<div class="card col col-sm-6 col-lg-3 mt-2 py-3 neighbour">${countryCard}</div>`;
    const neighbourDiv = document.querySelector('.neighbour-container');
    neighbourDiv.insertAdjacentHTML('beforeend', neighbourHtml);
  }
};

const getNeighbour = async (countryCode) => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
  const data = await response.json();
  return data[0];
};

const renderError = (msg) => {
  const inputContainer = document.querySelector('.input-section');
  const errorHtml = document.createElement('div');

  errorHtml.classList.add('alert', 'alert-danger', 'alert-container');
  // errorHtml.innerText = msg;
  errorHtml.innerHTML = `
<img src='./404.png' style="width: 20%" alt="" />
<h3 class="text-danger">${msg}</h3>
`;
  inputContainer.insertAdjacentElement('beforeend', errorHtml);
  // errorHtml.remove();
  setTimeout(() => {
    errorHtml.remove();
  }, 3000);
};

const getCountry = async (countryName) => {
  const url = `https://restcountries.com/v3.1/name/${countryName}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${response.message} failed ${response.status}`);
    }
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.log(error);
  }
};
viewCountry('turkey');
