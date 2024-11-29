// Форма з вибором улюбленого кольору.

let [...radioButtons]=document.querySelectorAll('input[name="color"]');
let formEl=document.querySelector('form');
let colorInfoEl=document.querySelector('.colorInfo');
let selectColor='';
let bodyEl=document.querySelector('body');
formEl.addEventListener('change', function(){
    for(radioButton of radioButtons){
        if(radioButton.checked){
            selectColor=radioButton.value;
            console.log(selectColor);
        }
        colorInfoEl.innerHTML=selectColor;
        bodyEl.style.backgroundColor=selectColor;
    }
    });

    // Форма для вибору хобі з чекбоксами.

let [...checkboxes]=document.querySelectorAll('.hobby-checkbox');
let resultEl=document.querySelector('.selected-hobbies');
checkboxes.forEach(element => {
    element.addEventListener('change', function(){
        let selectedHobbies = [];
        checkboxes.forEach(element => {
            if (element.checked) {
                selectedHobbies.push(element.value);
            }
        });
        if(selectedHobbies != []) {
            resultEl.innerHTML = selectedHobbies.join(', ');
        } else {
            resultEl.innerHTML = "";
        } 
    });
});

// Форма з вибором країни із випадаючого списку.

const countries = [
    {
        name: 'Україна',
        capital: 'Київ',
        population: '41 мільйон'
    },
    {
        name: 'США',
        capital: 'Вашингтон',
        population: '331 мільйон'
    },
    {
        name: 'Канада',
        capital: 'Оттава',
        population: '38 мільйонів'
    },
    {
        name: 'Франція',
        capital: 'Париж',
        population: '68 мільйонів'
    },
    {
        name: 'Італія',
        capital: 'Рим',
        population: '59 мільйонів'
    }
];

let selectEl = document.querySelector('select');
countries.forEach((value, index)=>{
    let option = document.createElement('option');
    option.value = index;
    option.innerHTML = value.name;
    selectEl.appendChild(option);
});
selectEl.addEventListener('change', function(){
    let selectIndex = this.value;
    let pEl = document.querySelector('.countryInfo');
    if(selectIndex !== ""){
        let country = countries[selectIndex];
        pEl.innerHTML = `
            <h4>${country.name}</h4>
            <p>${country.capital}</p>
            <p>${country.population}</p>
        `;
    }
    else{
        pEl.innerHTML = "";
    }
});

// Форма для оцінювання якості обслуговування.

let [...assessmentButtons] = document.querySelectorAll('input[name="assessment"]');
let assessmentMessage = document.querySelector('.assessment-message');
assessmentButtons.forEach(button => {
    button.addEventListener('change', () => {
        let assessment = button.value;
        assessmentMessage.innerHTML = `Дякуємо за вашу оцінку: ${assessment}!`;
        });
    });
