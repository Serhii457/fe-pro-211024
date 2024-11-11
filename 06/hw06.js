// 1 Створення класу та об'єкта.

// class Person{
//     constructor(name,age){
//         this._name=name;
//         this._age=age;
//     }
// }
// let userProfile=new Person('John',30);
// console.log(userProfile);

// 2 Методи класу

class Person{
        constructor(name,age){
            this._name=name;
            this._age=age;
        }
        sayHello(){
            console.log(`Hello, ${this._name}!`);
        }
    }
let userProfile=new Person('John',30);

userProfile.sayHello();

// 3 Наслідування

class Student extends Person{
    constructor(name,age,studentld){
        super(name,age);
        this._studentld=studentld;
    }
    study(){
        console.log(`${this._name} studies ${this._studentld}.`);
    }
}

let userInfo=new Student('Tom',23,'Biology');
userInfo.study();

// 4 Завдання для Math.min та Math.max

function minFn(num1,num2){
    return Math.min(num1,num2);
}
console.log(minFn(7,13));

function maxFn(num1,num2){
    return Math.max(num1,num2);
}
console.log(maxFn(17,3));

// 5 Завдання для Math.pow

function powFn(num,powOfNum){
    return Math.pow(num,powOfNum);
}
console.log(powFn(2,10));

// 6 Завдання для Math.floor та Math.ceil

function floorFn(num){
    return Math.floor(num);
}
function ceilFn(num){
    return Math.ceil(num);
}
console.log(`Результат числа, округленого вниз: ${floorFn(5.8)}`);
console.log(`Результат числа, округленого вгору: ${ceilFn(13.1)}`);

// 7 Завдання для Date.getYear

let nowDate=new Date();
function yearOfBirthFn(age){
    return nowDate.getFullYear()-age;
}

let age=Number(prompt('Введіть свій вік'));
console.log(`Рік народження ${yearOfBirthFn(age)}`);

// 8 Завдання для Date.toLocaleString

let now=new Date();
console.log(`Поточна дата та час: ${now.toLocaleString()}`);


// 9 Завдання для String.split та toUpperCase

let row="Kyiv is the capital of Ukraine";
let wordArray=row.toUpperCase().split(" ");
console.log(wordArray);

// let rowUpperCase=row.toUpperCase();
// let newArray=rowUpperCase.split(' ');
// console.log(newArray);

// let nextAr=row.toUpperCase().split(' ');
// console.log(nextAr);


// 10 Додаткове завдання
// Написати гру "Камінь, ножниці, папір"

// let userChoice=String(prompt("Введіть камінь, ножиці або папір").toUpperCase().trim());
// console.log(userChoice);

// До кінця не розумію, як прийняти рандомний варіант відповіді компьютера, який потім ми маємо порівняти з варіантом користувача і визначити переможця.
