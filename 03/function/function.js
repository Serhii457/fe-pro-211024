let a = 2;
// let b = 3;
// console.log('===');
// console.log(`Result a+b ${a+b}`);
// console.log('===');
// a=4;
// b=7;
// console.log('===');
// console.log(`Result a+b ${a+b}`);
// console.log('===');
// DRY don't repeat yourself
//Function Declaration
summResult(2,3);
summResult(4,3);
summResult(40,30);
summResult(140,-30);
summResult();
summResult(10);
function summResult(firstValue=0, secondValue=0){
    console.log('===');
    console.log(`Result ${firstValue}+${secondValue} = ${firstValue+secondValue}`);
    console.log('===');
}
function sayHi(name){
    if(name === undefined){
        console.log(`Hi stranger!`);
    }
    else{
        console.log(`Hi user: ${name}`);
    }
    
}
sayHi('Tom');
sayHi();
sayHi('Victoria');
// Function Expression
let sayHello = function(userName){
    if(userName === undefined){
        console.log(`Hi stranger!`);
    }
    else{
        console.log(`Hi user: ${userName}`);
    }
}
sayHello('Toma');
sayHello();
function confirmCallBack(){
    alert('Ми приймаємо ваше замовлення!');
}
function cancelCallback(){
    alert('Ми не приймаємо ваше замовлення!!!!!!');
}
// function showInfo(age, confirmCallBack, cancelCallback){
//     if(age>18){
//         confirmCallBack();
//     }
//     else{
//         cancelCallback();
//     }
// }
function showInfo(age, confirmFn, cancelFn){
    if(age>18){
        confirmFn();
    }
    else{
        cancelFn();
    }
}
// showInfo(19, confirmCallBack, cancelCallback);
// showInfo(17, confirmCallBack, cancelCallback);
function documentConfirmMessage(){
    document.write(`<h1>Ми приймаємо ваше замовлення!</h1>`);
}
function documentCancelMessage(){
    document.write(`<h1>Ми не приймаємо ваше замовлення!</h1>`);
    document.write(`<a href=''>Перегляньте інші товари!</a>`);
}
showInfo(17, documentConfirmMessage, documentCancelMessage);
function multiplyValue(a,b){
    // let result = a*b;
    console.log('Test');
    return a*b;
}
console.log(`Result multiply 2*2 = ${multiplyValue(2,2)}`);
function summValueFull(a,b){
    
    return a+b;
}
let summValueArrow = (a,b)=>a+b;
console.log(`Summ 2+3 =${summValueFull(2,3)}`);
console.log(`Summ 2+3 =${summValueArrow(2,3)}`);
let checkNumber = function(firstNumber, secondNumber){
    if(firstNumber>secondNumber){
        return `Biger number first ${firstNumber}`;
    }
    else{
        return `Biger number second ${secondNumber}`;
    }
}
console.log(`Check biger number between 2, 5 = ${checkNumber(2,5)}`);
let shortCheckNumber = (firstNumber, secondNumber)=>{
    // if(firstNumber>secondNumber){
    //     return `Biger number first ${firstNumber}`;
    // }
    // else{
    //     return `Biger number second ${secondNumber}`;
    // }
    return firstNumber>secondNumber ? `Biger number first ${firstNumber}` :`Biger number second ${secondNumber}`;
}
console.log(`Check biger number between 2, 5 = ${shortCheckNumber(20,5)}`);
// let wellcome = (userName='Stranger user')=>{
//     console.log(`Wellcome ${userName}`);
// }
function wellcome(userName='Stranger user'){
    console.log(`Wellcome ${userName}`);
    console.log(arguments);
}
wellcome('John');
wellcome();
wellcome('John2', 'Kail', 'Den');
let result = 1000;
    
function mathOperation(a,b){
    let result = 100;
    result+=a;
    result+=b;
    console.log(result);
}
mathOperation(12,23);
console.log(result);
