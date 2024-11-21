let headerEl=document.createElement('header');
headerEl.innerHTML='Hello header!'
//document.body.append(headerEl);
document.body.prepend(headerEl);
headerEl.setAttribute('style','padding: 50px');
headerEl.style.backgroundColor='yellow';
headerEl.style.textAlign='center';
console.log(headerEl);
// задав властивості атрибуту 'style' двома способами

const menuData = [
    { name: 'Головна', url: '/' },
    { name: 'Про нас', url: '/about' },
    { name: 'Послуги', url: '/services' },
    { name: 'Тарифи', url: '/rates' },
    { name: 'Контакти', url: '/contacts' },
];
let newHeader=document.createElement('header');
document.body.append(newHeader); //тут питання: якщо ми створюємо елемент, щоб побачити його на сторінці, це обов'язковий запис чи є інші варіанти?
newHeader.style.marginTop='50px';
for(let item of menuData){
let linkEl=document.createElement('a');
linkEl.innerHTML=item;
linkEl.textContent = item.name;
linkEl.href = item.url;
linkEl.style.margin='20px';
linkEl.style.color='black';
newHeader.appendChild(linkEl);
linkEl.setAttribute('target', '_blank'); //тегам А додав атрибут target з властивістю _blank
};


let container=document.createElement('div');
container.style.display='flex';
container.style.marginTop='50px';
document.body.appendChild(container); // в попередніх завданнях використав append, тут appendChild, результат однаковий, так розумію, можна обома способами?
for(i=0; i<50; i++){
    let block=document.createElement('div');
    block.style.borderRadius='50%';
    block.style.width='50px';
    block.style.height='50px';
    block.style.backgroundColor='green';
    container.appendChild(block);
    block.classList.add('circle-elemt'); //додав кожному створеному div елементу класс
}

const elementsArray=[
    { text: 'Елемент 1', usePrepend: true },
    { text: 'Елемент 2', usePrepend: false },
    { text: 'Елемент 3', usePrepend: true }
];
console.log(elementsArray);

let blockContainer=document.createElement('div');
document.body.appendChild(blockContainer);
blockContainer.textContent='Блок контейнер';
for(let element of elementsArray){
    let pEl=document.createElement('p');
    pEl.innerHTML=element.text;
    if(element.usePrepend){
        blockContainer.before(pEl);
    }
    else{
        blockContainer.after(pEl);
    }
}

