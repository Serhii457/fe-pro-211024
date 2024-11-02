//push
let myArray=[];
myArray.push(20);
myArray.push(145);
myArray.push(15);
myArray.push(52);

console.log(myArray);

function addElement(arr, item){
    arr.push(item);
}

addElement(myArray, 'Hello new element');
console.log(myArray);
addElement(myArray, 777);
console.log(myArray);

//pop
let secondArr=[25, true, 147, 'Hello', false, 555];
console.log(secondArr);
secondArr.pop();
console.log(secondArr);

function delElement(arr){
    arr.pop();
}

delElement(secondArr);
console.log(secondArr);

//unshift
let nextArray=['developer', 5, true, 22];
nextArray.unshift('Dear');
nextArray.unshift('Hello');
console.log(nextArray);

function addStart(arr, item){
    arr.unshift(item);
}

addStart(nextArray, 888);
console.log(nextArray);

//shift
let anotherArr=[1,2,3,4,5,6,7];
console.log(anotherArr);
anotherArr.shift();
console.log(anotherArr);

function delStart(arr){
    arr.shift();
}

delStart(anotherArr);
console.log(anotherArr);

//fill
let fillArray=new Array(10);
console.log(fillArray);
fillArray.fill(7);
console.log(fillArray);

function fillFn(arr,item,indexStart, indexEnd){
    arr.fill(item, indexStart, indexEnd);
}
fillFn(fillArray, 'K', 1,3);
console.log(fillArray);
fillFn(fillArray, 'R',4,6);
console.log(fillArray);
fillFn(fillArray, 'W',7,9);
console.log(fillArray);

//sort
let arrOfNumbers=[44,32,17,24,8,56,75,81,99,100];
console.log(arrOfNumbers);
// arrOfNumbers.sort();
// console.log(arrOfNumbers);
// arrOfNumbers.sort((a,b)=>a-b);
// console.log(arrOfNumbers);
// arrOfNumbers.sort((a,b)=>b-a);
// console.log(arrOfNumbers);

function sortArr(arr){
    arr.sort((a,b)=>b-a);
    arr.fill(10,0,3);
}
sortArr(arrOfNumbers);
console.log(arrOfNumbers);

// Додаткові завдання не зміг зробити...
// let mynextArray=[2,4,8,4,54,7,12,10,8,52,75];
// console.log(mynextArray);
// console.log(mynextArray.includes(8));
// console.log(mynextArray.includes(88));
// let lengthMyArr = mynextArray.length;
// let indexOfArr;
// console.log(lengthMyArr);
// let i=0;
// let el1=mynextArray[i];
// let el2=mynextArray[i+1];
// console.log(el1);
// let removedArr=[];
// for(i=0; i<lengthMyArr; i++){
//     if(el1===el2){
//         indexOfArr=i;
//         removedArr=mynextArray.splice(i,1);
        
// }
// }
// console.log(removedArr);
// console.log(mynextArray);



