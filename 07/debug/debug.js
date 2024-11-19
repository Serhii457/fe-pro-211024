let fistValue = 2;
let secondValue = 3;
let result = fistValue+secondValue;
console.log(result);
let dataArr = [
    'First',
    'Second',
    'Third'
]
function innerFn(value){
    return value+33;
}
dataArr.forEach(item =>{
    let res = innerFn(item);
    console.log(`Result ${res}`);
})