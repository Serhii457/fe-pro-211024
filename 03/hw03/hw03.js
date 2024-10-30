// 1. Підрахунок суми парних чисел:
let i=1;
let sumEvenNumbers=0;
while(i<=20){
    if(i%2===0){
        sumEvenNumbers+=i
    }
    i++;
}
console.log('Сума парних чисел в заданому діапазоні=', sumEvenNumbers)

// 2. Таблиця множення:
for(i=1; i<=10; i++){
    console.log('5*',i,'=', 5*i);
}

// 3. Зворотний лічильник:
for(i=10; i>=1; i--){
    console.log(i);
}

// 4.
let whatIsNumber=Number(prompt('Введіть число'));
if(whatIsNumber%2===0){
    console.log('Число парне');
    alert('Число парне');
} else{
    console.log('Число непарне');
    alert('Число не парне');
}
// я не застосував for, тому що в цьому завданні не бачу, для чого цей оператор застосовувати
// повідомлення вивів і в консоль, і на екран за допомогою alert

// 5. Калькулятор
function sumValue(a,b){
    return a+b;
}
function diffValue(a,b){
    return a-b;
}

function multValue(a,b){
    return a*b;
}
function quotValue(a,b){
    return a/b;
}

let a=Number(prompt('Введіть число'));
let x=prompt('Введіть математичну операцію');
let b=Number(prompt('Введіть число'));

switch(x){
    case '+':
        console.log(sumValue(a,b));
        break;
    case '-':
        console.log(diffValue(a,b));
        break;
    case '*':
        console.log(multValue(a,b));
        break;
    case '/':
        console.log(quotValue(a,b));
        break;
    default:
        console.log('Введена невідома операція');
        break;
}

// 6. Перепишіть стрілкову функцію в звичайну 
//const multiplyValues = (a, b, c) => a * b * c;
function multiplyValues(a,b,c){
    return a*b*c;
}

// Додаткова робота
// 1. Параметри та колбеки
//let userName=['Tom', 'Nick', 'Joe', 'Alex'];

let userName=['Tom', 'Nick', 'Joe', 'Alex'];
function hiUser(userName){
    console.log('Вітаю, ', userName);
}
userName.forEach(hiUser);

// function wellcomeUser(hiUser){
//     hiUser(userName);
// }
// не вдалось у мене вивести в консоль вітання через функцію wellcomeUser

// 2. Стрілкова функція
let hiUssser=(userName)=>console.log('hi, ', userName);
userName.forEach(hiUssser);



