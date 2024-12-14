// Завдання 1. Використовуйте fetch для отримання списку всіх користувачів з JSONPlaceholder (/users ендпойнт).
// Виведіть імена та електронні адреси користувачів у консоль або на веб-сторінку.
// Виведення детальної інформації про одного користувача
// https://jsonplaceholder.typicode.com/

function fetchFn(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let userList=document.querySelector('ul');
        userList.innerHTML='';
        users.forEach(user=>{
            let userEl=document.createElement('li');
            userEl.innerHTML=`${user.name} email: ${user.email}`;
            userList.appendChild(userEl);
            userEl.onclick= () => userInfoFn(user.id);
        });
    })
    .catch((error) => console.log(error));
}


function userInfoFn(userId){
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        let userInfo=document.querySelector('#info');
        userInfo.innerHTML= `
        <h3>${user.name}</h3>
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>Website: ${user.website}</p>`
    })
    .catch((error) => console.log(error));
}

fetchFn();

// Завдання 2. Зробити сторінку з кнопкою, при натиску на кнопку робиться запит до https:// swapi.dev/api/planets/ та виводиться картка з даними з запиту, дані з масиву які мають лінк треба вивести в тег А і додати лінк в атрибут href.

let buttonEl=document.querySelector('button');
buttonEl.onclick= () => {
    fetchPlanets();
    }

function planetCardFn(planet) {
    let planetCard = document.createElement('div');
    let planetName = document.createElement('h3');
    planetName.innerHTML = planet.name;
    let planetInfo = document.createElement('ul');

    for (let key in planet) {
        let listItem = document.createElement('li');
        if (Array.isArray(planet[key])) {
            listItem.innerHTML = `${key}: `;
            let linksContainer = linksFn(planet[key]);
            listItem.appendChild(linksContainer);
        } else {
            listItem.innerHTML = `${key}: ${planet[key]}`;
        }
        planetInfo.appendChild(listItem);
    }

    planetCard.appendChild(planetName);
    planetCard.appendChild(planetInfo);

    return planetCard;
}

function fetchPlanets() {
    fetch('https://swapi.dev/api/planets/')
        .then(response => response.json())
        .then(data => {
            let planetCards = document.querySelector('#planetCards')
            data.results.forEach(planet => {
                let planetCard = planetCardFn(planet);
                planetCards.appendChild(planetCard);
            });
        })
        .catch(error => console.error(error));
}
    
function linksFn(array) {
    let linksContainer = document.createElement('div');
    array.forEach(link => {
        let aEl = document.createElement('a');
        aEl.href = link;
        aEl.innerHTML = link;
        aEl.target = '_blank';
        linksContainer.appendChild(aEl);
    });
    return linksContainer;
}

// Завдання 3. Отримання і виведення інформації про планету з SWAPI.
// Створіть функцію, яка використовує async/await для запиту інформації про конкретну планету з SWAPI. Виведіть назву планети та клімат.

async function fetchDefinitePlanet(id) {
    let res = await fetch(`https://swapi.dev/api/planets/${id}`);
    let data = await res.json();
    console.log(`Назва планети: ${data.name}`);
    console.log(`Клімат: ${data.climate}`);

    let definitePlanet = document.querySelector('#definitePlanet');
    definitePlanet.innerHTML="";
    let definitePlanetName = document.createElement('h3');
    let definitePlanetClimate = document.createElement('p');
    definitePlanet.appendChild(definitePlanetName);
    definitePlanet.appendChild(definitePlanetClimate);
    definitePlanetName.innerHTML=data.name;
    definitePlanetClimate.innerHTML=data.climate;
    
}
 
// натискаємо кнопку, вводимо необхідний id планети і отримуємо назву і клімат.

let defPlanetBtn = document.querySelector('#defPlanet');
defPlanetBtn.onclick=() => {
    let promptNumberPlanet = Number(prompt('Введіть id планети'));
    fetchDefinitePlanet(promptNumberPlanet);
}