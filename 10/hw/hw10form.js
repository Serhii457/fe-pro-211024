let currenceFromEl = document.querySelector('#currencyFrom');
let currencyToEl = document.querySelector('#currencyTo');
let calculateValueEl = document.querySelector('#calculateValue');

function checkFields(){
    if(currenceFromEl.value !== '' && currencyToEl.value !== ''){
        calculateValueEl.removeAttribute('disabled');
    } 
    else{
        calculateValueEl.setAttribute('disabled', '');
    }
}
currenceFromEl.addEventListener('input', checkFields);
currencyToEl.addEventListener('input', checkFields);
let outputEl = document.querySelector('strong');
calculateValueEl.addEventListener('click', function(e){
    e.preventDefault();
    let resultValue = Number(currenceFromEl.value)/Number(currencyToEl.value);
    outputEl.innerHTML = resultValue;
});
