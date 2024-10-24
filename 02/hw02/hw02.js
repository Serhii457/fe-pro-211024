           //Homework 02

           
// завдання 1
let number1=10;
let number2=20;
       //варіант 1
alert(`Чи рівні числа? ${number1==number2}`);

       //варіант 2
if(number1==number2){
    alert('Числа рівні.')
} else{
    alert('Числа не рівні.')
}

//завдання 2
let promtResult=Number(prompt('Введіть число'));
if(promtResult%2==0){
    console.log('Число парне');
} else {
    console.log('Число не парне');
}

//завдання 3
let yourAge=Number(prompt('Вкажіть свій вік'));
if(yourAge<18){
    console.log('Ви не можете використовувати цей сайт.');
} else{
    console.log('Ви можете використовувати цей сайт!');
}

//завдання 4
let price=Number(prompt('Enter price'));
let quantity=Number(prompt('Enter quantity'));
let cost=price*quantity;
console.log('Cost=',cost)

//завдання 5
let costForDiscount=Number(prompt('Enter cost'));
let discount=0.5*costForDiscount;
alert(`Ваша знижка ${discount} грн`);

//завдання 6
let a=Number(prompt('Введіть перше число'));
let b=Number(prompt('Введіть друге число'));
let c=Number(prompt('Введіть третє число'));
let max=Math.max(a,b,c);
console.log(`Найбільше число ${max}`);

//завдання 7
let monthNumber=Number(prompt('Введіть число від 1 до 12'));
if(monthNumber==1||monthNumber==2||monthNumber==12){
    console.log('Введений місяць належить сезону "Зима"')
}
else
    if(monthNumber==3||monthNumber==4||monthNumber==5){
        console.log('Введений місяць належить сезону "Весна"')
    }
    else
    if(monthNumber==6||monthNumber==7||monthNumber==8){
        console.log('Введений місяць належить сезону "Літо"')
    }
    else
    if(monthNumber==9||monthNumber==10||monthNumber==11){
        console.log('Введений місяць належить сезону "Осінь"') 
    } 
    else{
        console.log('Неправильно введене число')
    }

    //завдання 8
    let inputNumber=Number(prompt('Введіть число'));
    let whatIsNumber;
    if(inputNumber<0) whatIsNumber="Від'ємне число"
    else if (inputNumber>0) whatIsNumber="Додатне число"
    else whatIsNumber="Нуль";
    console.log(whatIsNumber);
        
    
    