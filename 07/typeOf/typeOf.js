// typeof
//undefind
//boolean
//number
//string
//symbol
//function
//object
//bigInt
let value = 42;
let valueType = typeof value;
console.log(valueType);
console.log(`Test data type ${value} type ${typeof value}`);
console.log(`Test data type 'Hello world' type ${typeof 'Hello world'}`);
let testOb ={
    key:'Test'
}
console.log(`Test obj + value Object ${typeof testOb} key ${typeof testOb.key}`);
console.log(`Test arr ${typeof [1,2,3]}`);
console.log(`Null ${typeof null}`);
let symbolValue = Symbol('test');
console.log(`Symbol type ${typeof symbolValue}`);
let fnValue = ()=>'Hello';
console.log(`Test function data ${typeof fnValue}`);
let nunderFindValue = undefined;
console.log(`Test undefined value ${typeof nunderFindValue}`);
console.log(`Test bolean value ${typeof true}`);
console.log(`Test bolean value ${typeof false}`);
