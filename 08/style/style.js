let mainTitle = document.querySelector('h1');
console.log(mainTitle.style);
// mainTitle.style.animationDuration ='30s';
mainTitle.style.backgroundColor ='black';
mainTitle.style.paddingRight = '50px';
mainTitle.style.fontSize = '30px';
mainTitle.style.color = 'yellow';
// startValue = 30;
// setInterval(()=>{
//     startValue++;
//     mainTitle.style.fontSize = `${startValue}px`;
//     mainTitle.style.paddingLeft = `${startValue}px`;
// },2000);
let pEl = document.querySelector('p');
console.log(`P style ${pEl.getAttribute('style')}`);
let allStyle = getComputedStyle(pEl);
// console.log(allStyle);
console.log(`BG ${allStyle.backgroundColor}`);
console.log(`Font size ${allStyle.fontSize}`);
console.log(`margin size ${allStyle.margin}`);
let fontSizeValue = parseInt(allStyle.fontSize);
console.log(typeof fontSizeValue);
fontSizeValue=fontSizeValue+20
console.log(fontSizeValue);
pEl.style.fontSize = `${fontSizeValue}px`;
let subTitleEl = document.querySelector('h2');
// subTitleEl.setAttribute('class', 'text-center m-0 border');
// subTitleEl.setAttribute('class', 'text-center m-0 radius');
// console.log(subTitleEl.className);
// subTitleEl.className +='border';
console.log(subTitleEl);
console.log(subTitleEl.classList);
// animate__animated animate__bounce
subTitleEl.classList.add('radius', 'border', 'hover-item', 'animate__animated', 'animate__bounce', 'animate__delay-2s', 'animate__repeat-2', 'text-center');
// subTitleEl.classList.add('border');
subTitleEl.classList.remove('border', 'radius');
// subTitleEl.classList.remove('radius');
// subTitleEl.classList.remove('m-0');
// subTitleEl.classList.add('m-50');
subTitleEl.classList.replace('m-0', 'm-50');
subTitleEl.classList.replace('text-align', 'border');
console.log(`Has class text-center: ${subTitleEl.classList.contains('text-center')}`);
if(subTitleEl.classList.contains('text-center')){
    subTitleEl.innerHTML = 'Already centred';
}   
else{
    subTitleEl.classList.add('text-center');
}
let btn = document.querySelector('button');
btn.onclick = function(){
    subTitleEl.classList.toggle('close');
}