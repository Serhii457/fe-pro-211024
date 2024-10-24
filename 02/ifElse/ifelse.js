let thisYear = 2025;
// thisYear === 2024 // false
// if(thisYear === 2024){
//     alert('Hello 2024');
// }
// thisYear === 2025 // true
// if(thisYear === 2025){
//     alert('Hello 2025');
// }
// if(true){
//     alert('True result');
// }
let result = 20<4;// false
if(result){
    alert('True result');
}else{
    alert(`Result >4`);
}
let userNumber = 60;
if(userNumber<4){
    console.log(`Usernumber ${userNumber} <4`);
}
else if(userNumber>5 && userNumber<10){
    console.log(`Usernumber 5< ${userNumber} < 10`);
}
else if(userNumber>11 && userNumber<50){
    console.log(`Usernumber 11< ${userNumber} <50`);
}
else{
    console.log(`Usernumber ${userNumber} any info about this`);
}
let isUserAdmin = true;
// if(isUserAdmin){
//     console.log('User is admin');
// }
// else{
//     console.log('User is not admin');
// }
if(!isUserAdmin){
    console.log('User is not admin! Hello user');
}
let userHelloMessage = '';
let userLoginToSystem = false;
// if(userLoginToSystem){
//     userHelloMessage='Hello user';
// }
// else{
//     userHelloMessage='Goodbye user';
// }
userHelloMessage = userLoginToSystem ? 'Hello user' : 'Goodbye user';
console.log(`User text message ${userHelloMessage}`);
let score = 65;
let grade ='';
// if(score>=90){
//     grade='A';
// }else if(score>=80){
//     grade='B';
// }else if(score>=70){
//     grade='C';
// }else{
//     grade='D-';
// }
grade = (score>=90)? 'A':
        (score>=80)? 'B':
        (score>=70)? 'C': 'D-';
console.log(`User score ${score} user grade ${grade}`);
let firstNumber = prompt('Type first number');
let secondNumber
let thirdNumber
// if(){
//     if{
//     }
//     else{
//         if(){
//         }
//         else{
//         }
//     }
// }
// else{
// }
let monthNumber = prompt('Month number');
