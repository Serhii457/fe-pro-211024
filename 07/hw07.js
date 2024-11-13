// 1  Spread

function spreadArrFn(arr1,arr2){
    let newArr=[...arr1,...arr2];
    console.log(newArr);
}

let firstArr=[1,2,3,4];
let secondArr=[5,6,7,8];
spreadArrFn(firstArr,secondArr);

// 2 Rest

function restFn(stringElement,...arg){
    console.log('Рядок:',stringElement);
    console.log('Масив:',arg);
}
restFn('Hello',22,33,44,55,66,77);


function averageFn(...arg){
    let sumOfElements=0;
    for (i=0;i<arg.length;i++){
        sumOfElements+=arg[i];
    }
    let average=sumOfElements/arg.length;
    console.log(`Сума елементів: ${sumOfElements}`);
    console.log(`Середнє значення елементів: ${average}`);
}

averageFn(10,20,30,40,50,50,10);
averageFn(1,2);

// 3 TypeOf

function typeFn(arg){
    console.log(`Аргумент типу ${typeof arg}`);
}
typeFn(true);
typeFn('hello');
typeFn({name:'John',age:25});
typeFn(120);

function variableTypeFn(arg){
    if(typeof arg==='number'){
        console.log('Це число.');
    } else if(typeof arg==='string'){
        console.log('Це рядок.');
    } else{
        console.log('Це інший тип.')
    }
}
variableTypeFn(false);
variableTypeFn(100);
variableTypeFn('Hi!');
variableTypeFn(undefined);