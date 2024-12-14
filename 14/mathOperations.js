function summ(a,b){
    let res = a+b;
    console.log(`Result ${a}+${b}=${res}`);
}
function minus(a,b){
    let res = a-b;
    console.log(`Result ${a}-${b}=${res}`);
}
function mult(a,b){
    let res = a*b;
    console.log(`Result ${a}*${b}=${res}`);
}
function divide(a,b){
    if (!(b===0)){
        let res = a/b;
        console.log(`Result ${a}/${b}=${res}`);
    }
    else {
        console.log('На 0 ділити не можна');
    }
    
}

export {summ, minus, mult, divide};