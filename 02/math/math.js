// - Віднімання
// + Додавання
// * множення
// / ділення
// % залишок від ділення
// ** піднесення до степеня
let firstValue = 30;
let secondValue =3;
let secondValueNumber = 2;
let summResult = firstValue + secondValue; // '32'
console.log(`+ operation ${summResult}`);
console.log(`+ operation result ${firstValue} + ${secondValue} = ${firstValue+secondValue}`);
console.log(`- operation result ${firstValue} - ${secondValue} = ${firstValue-secondValue}`);
console.log(`- operation result ${firstValue} - ${secondValueNumber} = ${firstValue-secondValueNumber}`);
console.log(`* operation result ${firstValue} * ${secondValue} = ${firstValue*secondValue}`);
console.log(`* operation result ${firstValue} * ${secondValueNumber} = ${firstValue*secondValueNumber}`);
console.log(`/ operation result ${firstValue} / ${secondValue} = ${firstValue/secondValue}`);
console.log(`/ operation result ${firstValue} / ${secondValueNumber} = ${firstValue/secondValueNumber}`);
console.log(`% operation result ${firstValue} % ${secondValue} = ${firstValue%secondValue}`);
console.log(`% operation result ${firstValue} % ${secondValueNumber} = ${firstValue%secondValueNumber}`);
// 2->2 2*2
// 2->3 2*2*2
console.log(`** operation result ${2} ** ${2} = ${2**2}`);
console.log(`** operation result ${2} ** ${3} = ${2**3}`);
console.log(`** operation result ${4} ** ${0.5} = ${4**0.5}`);
let middleValue = (1+2+3)/3
console.log(middleValue);
console.log(`Math operation priority ${(1+2+3)/3}`);
console.log(`Math operation priority ${(2*4)+(6/4)+(2**2)}`);
let age = 25;
age = age +5;
console.log(age);
//Скорчений запис виразу age = age +5;
age+=5;
console.log(age);