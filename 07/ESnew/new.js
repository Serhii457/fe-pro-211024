let keyValue = Symbol(1); // yнікальне значення
console.log(keyValue);
let nextKey = Symbol(1); // yнікальне значення
console.log(nextKey);
console.log(`Test compare Symbol ${keyValue == nextKey}`);
console.log(`Test compare Symbol ${keyValue === nextKey}`);
// Spread 
let fisrstArr = [1,2,3];
let secondArr = [4,5,6];
// fisrstArr = fisrstArr.concat(secondArr);
fisrstArr = [...fisrstArr,...secondArr, 7, 8];
console.log(fisrstArr);
let firstObj = {
    userName:'Tom',
    userAge:24
}
let secondObj = {
    ...firstObj,
    skill:'js'
}
console.log(secondObj);
// Rest operator
// function testFn(a, b, c){
//     console.log(arguments);
// }
function testFn(...arg){
    console.log(arg);
}
testFn(1,2,3,'helo', 'new', 7, 8);
console.log(fisrstArr);
console.log(Math.min(...fisrstArr));
console.log(Math.max(...fisrstArr));
let cars = ['BMW', 'Ford', 'Fiat'];
// let bmw = cars[0];
// let ford = cars[1];
// let fiat = cars[2];
let [bmw, ford, fiat] = cars;
console.log(bmw); 
console.log(ford); 
const person = {
    firstName:'John',
    lastName:'Dou'
}
const {firstName, lastName} = person;
console.log(firstName.toUpperCase());
// console.log(person.firstName.toUpperCase());
const hero = {
    heroName:'Batman',
    realName:'Bruce',
    suitColor:'red'
}
const {heroName, realName, suitColor='black'} = hero;
console.log(`Hero info ${realName} real name ${realName} suit color is ${suitColor}`);
let heroes = [
    {name:'Batman'},
    {name:'Joker'}
];
// for(let item of heroes){
//     console.log(item.name);
// }
for(let {name} of heroes){
    console.log(`New version ${name}`);
}
// let stringHeroes = heroes.map(
//     function({name}){
//         return `This hero name is ${name}`;
//     }
// )
let stringHeroes = heroes.map(({name})=>`This hero name is ${name} 2`)
console.log(stringHeroes);