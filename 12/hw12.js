let bodyEL = document.querySelector('body');
let btnEl = document.querySelector('button');

//  Варіант 1
// function getRandomColor(){
//     const r = Math.floor(Math.random()*256);
//     const g = Math.floor(Math.random()*256);
//     const b = Math.floor(Math.random()*256);
//     return `rgb(${r},${g},${b})`;
// }

// btnEl.onclick = function(){
//     let color=getRandomColor();
//     document.body.style.backgroundColor = color;
//     console.log(color);
// }

// Варіант 2
let colorsCss = ['var(--bg-color1)', 'var(--bg-color2)', 'var(--bg-color3)', 'var(--bg-color4)'];
btnEl.onclick = function() {
    let randomColor = colorsCss[Math.floor(Math.random() * colorsCss.length)];
    bodyEL.style.backgroundColor = randomColor;
    console.log(randomColor);
};

// Це завдання спробував зробити двома способами. Якщо використати перший, то можна не використовувати стилі CSS. Зробив спочатку без CSS, потім ще раз прочитав повністю умову завдання і додав стилі.


// Знаходження всіх великих літер в тексті і збереження їх в масив

let textStr = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";
let upperCasePattern=/[A-Z]/g;
let upperCaseLetters=textStr.match(upperCasePattern);
console.log(upperCaseLetters);

// Вибір числових значень з строки
let operation = "5 плюс 7 = 3";
let numberPattern=/\d+/g;
let numbersFromString=operation.match(numberPattern);
console.log(numbersFromString);

// Знаходження слів із певною кількістю символів.

let fiveLettersWordsPattern=/\b[a-zA-Z]{5}\b/g;
let fiveLettersWords=textStr.match(fiveLettersWordsPattern);
console.log(fiveLettersWords);
