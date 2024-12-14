function toUpperCaseFn(string) {
    let result = string.toUpperCase();
    console.log(result); 
}
function reverseFn(string) {
    let result = string.split('').reverse().join('');
    console.log(result);
}

export {toUpperCaseFn, reverseFn};