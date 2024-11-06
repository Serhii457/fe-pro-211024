// splice
let myArr =['London','Paris','Rome','Madrid','Milan','Barcelona','Berlin'];
console.log(myArr);
myArr.splice(2,3);
console.log(myArr);
function delElements(arr,el,quantity){
    arr.splice(el,quantity);
}
delElements(myArr,1,2);
console.log(myArr);

// map
// завдання 1
let numbersArr=[7,25,3,5,13,11,10,1,6,12];
let sqrtArr=numbersArr.map(function sqrtFn(value){
    return value*value;
})
console.log(sqrtArr);

// завдання 2

// Варіант вирішення 1

function addStringFn(arr){
    let newArray=arr.map(function stringAdd(value){
        return `Отримана строка для елементу ${value}`
    });
    return newArray;
}

let firstArr=[true, false,'Joe', 888, 12, 'Nick'];
console.log(addStringFn(firstArr));
console.log(addStringFn(numbersArr));

// Варіант рішення 2
// Більш універсальний, до основної функції можна додавати будь-яку іншу функцію.

function addTest(arr, addFn){
    return newAddArr=arr.map(addFn);
}

function stringAddFirst(arr){
    return `Отримана строка для елементу ${arr}`
}

function stringAddSecond(arr){
    return `Інший варіант для елементу ${arr}`
}


console.log(addTest(firstArr,stringAddFirst));
console.log(addTest(firstArr,stringAddSecond));


// filter
// завдання 1
let forFilterArr=[15,22,67,121,46,78,8,9,24];
let evenNumbers=forFilterArr.filter((number)=>number%2===0);
console.log(evenNumbers);

// завдання 2
function filterFn(arr, conditionFn){
    return newFilterArr=arr.filter(conditionFn);
}

function isNumberEven(number){
    return number%2===0;
}

function isNumberBig(number){
    return number>50;
}

console.log(filterFn(forFilterArr,isNumberEven));
console.log(filterFn(forFilterArr,isNumberBig));

// завдання 3
// Переишіть цей код використовуючи let const~
// Замість var
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }
// // Замість var
// var message = 'test';
// function example() {
//     if (true) {
//         var message = 'Hello, world!';
//         console.log(message);
//     }
//     console.log(message); // Виведе 'Hello, world!'
// }

for (let i = 0; i < 5; i++) {
         console.log(i);
     }

let message = 'test';
function example() {
         if (true) {
            message = 'Hello, world!';
             console.log(message);
        } else
        console.log(message);
    }
example();

// завдання 4
//Використовуючи for in  виведіть значення з обєктку в console.log
const person = {
    name: 'John',
    age: 25,
    occupation: 'Developer',
    city: 'Kyiv'
};

for(let key in person){
    console.log(person[key]);
}

// завдання 5
// Використовуючи for of  та for in  виведіть занчення з обєктів які знаходяться в масиві
const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];
let userInfo ={};
for(let value of students){
    userInfo=value;
    for(let key in userInfo){
        console.log(userInfo[key]);
    }
}
